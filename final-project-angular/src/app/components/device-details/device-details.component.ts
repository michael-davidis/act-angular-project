import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { DeviceManagementService } from 'src/app/services/device-management.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css'],
})
export class DeviceDetailsComponent implements OnInit {
  currentDevice!: Device;
  myform!: FormGroup;

  constructor(
    private activatedroute: ActivatedRoute,
    private deviceService: DeviceManagementService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    let id: string;

    this.activatedroute.paramMap.subscribe((data: any) => {

      id = data.get('id');
      let index = this.deviceService.devices.findIndex((el: any) => {
        return el.serialNumber == id;
      });
      this.currentDevice = this.deviceService.devices[index];
      console.log(this.currentDevice.type);


      this.myform = this.fb.group({
        serialNumber: new FormControl(this.currentDevice.serialNumber),
        description: new FormControl(this.currentDevice.description),
        type: new FormControl(this.currentDevice.type)
      });
    });
  }

  editDevice(){
    let editedDevice: Device = new Device(
      this.myform.value.serialNumber,
      this.myform.value.description,
      this.myform.value.type,
      ''
    );
    this.deviceService.editDevice(editedDevice);
  }

  deleteDevice(){
    this.deviceService.deleteDevice(this.currentDevice)
  }
}
