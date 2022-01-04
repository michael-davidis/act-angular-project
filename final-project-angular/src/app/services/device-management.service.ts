import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../models/Device';

@Injectable({
  providedIn: 'root'
})
export class DeviceManagementService {
  devices: Device[] = [];

  constructor(private http: HttpClient) {
    this.getDevices();
  }

  createDevice(device: Device){
    this.http.post("https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Devices.json", device).subscribe((response) => {
      this.getDevices();
      console.log(response);
    });
}

  getDevices(){
    this.http
    .get(
      'https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Devices.json'
    )
    .subscribe((response: any) => {
      // for (let key in response) {
      //   this.devices.push(
      //     new Device(key, response[key].name, response[key].email)
      //   );
      // }

      console.log(response);
    });
  }

  editDevice( device: Device){
    // this.http
    //   .put(
    //     'https://typescript-dwadaw-default-rtdb.firebaseio.com/Employees/' +
    //     device. +
    //       '.json',
    //     {
    //       id: device.id,
    //       name: 'changed name',
    //       email: 'changed_email@gmail.com',
    //     }
    //   )
    //   .subscribe((response: any) => {
    //     let newEmp = response;
    //     let index = this.devices.findIndex((el) => {
    //       return (el.id = newEmp.id);
    //     });

    //     this.devices[index] = newEmp;
    //   });
  }

  deleteDevice( device: Device){
    // this.http
    // .delete("https://typescript-c394dsddsb-default-rtdb.firebaseio.com/Employees/" + device.id + ".json")
    // .subscribe((response: any) => {
    //   console.log(response);
    // });
  }
}
