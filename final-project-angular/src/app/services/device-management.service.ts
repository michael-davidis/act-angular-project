import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../models/Device';

@Injectable({
  providedIn: 'root',
})
export class DeviceManagementService {
  devices: Device[] = [];
  devicesIds: any[] = [];

  constructor(private http: HttpClient) {
    this.getDevices();
  }

  createDevice(device: Device) {
    this.http
      .post(
        'https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Devices.json',
        device
      )
      .subscribe((response) => {
        this.getDevices();
        console.log(response);
      });
  }

  public getDevicesNow() {
    return this.http.get(
      'https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Devices.json'
    );
  }

  public getDevicesIds() {
    return this.http.get(
      'https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Devices.json'
    );
  }

  public getDeviceById(deviceId: string) {
    return this.devices.find((x) => x.serialNumber === deviceId);
  }

  getDevices() {
    this.devices = [];
    let devicesIds: any[] = [];
    this.http
      .get(
        'https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Devices.json'
      )
      .subscribe((response: any) => {
        for (let key in response) {
          this.devices.push(
            new Device(
              response[key].serialNumber,
              response[key].description,
              response[key].type,
              null
            )
          );

          devicesIds[response[key].serialNumber] = key + '';
        }

        this.devicesIds = devicesIds;

      });
  }

  editDevice(device: Device) {
    this.http
      .put(
        'https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Devices/' +
          this.devicesIds[device.serialNumber as any] +
          '.json',
        {
          serialNumber: device.serialNumber,
          description: device.description,
          type: device.type,
          owner: device.owner,
        }
      )
      .subscribe((response: any) => {
        this.getDevices();
      });
  }

  deleteDevice(device: Device) {
    console.log(this.devicesIds[device.serialNumber as any]);
    // this.http
    // .delete("https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Devices/" + this.devicesIds[device.serialNumber as any] + ".json")
    // .subscribe((response: any) => {
    //   console.log(response);
    // });
  }
}
