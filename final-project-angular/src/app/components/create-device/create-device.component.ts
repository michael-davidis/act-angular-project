import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Device } from 'src/app/models/Device';
import { DeviceManagementService } from 'src/app/services/device-management.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {
  myform = new FormGroup({
    serialNumber: new FormControl(),
    description: new FormControl(),
    type: new FormControl(),
  });
  
  constructor(private deviceService: DeviceManagementService) { }

  ngOnInit(): void {
  }

  createDevice(){
    this.deviceService.createDevice( new Device( this.myform.value.serialNumber, this.myform.value.description, this.myform.value.type) );
  }

}
