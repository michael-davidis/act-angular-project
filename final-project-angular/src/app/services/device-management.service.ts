import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../models/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceManagementService {
  devices: Device[] = [];

  constructor(private http: HttpClient) { }

  getDevices(){
    this.http
    .get(
      'https://typescript-ddaddefault-rtdb.firebaseio.com/Employees.json'
    )
    .subscribe((response: any) => {
      for (let key in response) {
        this.devices.push(
          new Device(key, response[key].name, response[key].email)
        );
      }
    });
  }

  editDevice( device: Device){
    this.http
      .put(
        'https://typescript-dwadaw-default-rtdb.firebaseio.com/Employees/' +
        device.id +
          '.json',
        {
          id: device.id,
          name: 'changed name',
          email: 'changed_email@gmail.com',
        }
      )
      .subscribe((response: any) => {
        let newEmp = response;
        let index = this.devices.findIndex((el) => {
          return (el.id = newEmp.id);
        });

        this.devices[index] = newEmp;
      });
  }

  deleteDevice( device: Device){
    this.http
    .delete("https://typescript-c394dsddsb-default-rtdb.firebaseio.com/Employees/" + device.id + ".json")
    .subscribe((response: any) => {
      console.log(response);
    });
  }
}
