import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { Employee } from 'src/app/models/Employee';
import { DeviceManagementService } from 'src/app/services/device-management.service';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  myform: FormGroup;
  availableDevices: Device[] = [];

  constructor(
    private employeeService: EmployeeManagementService,
    private deviceService: DeviceManagementService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.myform = this.fb.group({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      checkArray: this.fb.array([[]]),
    });
  }

  ngOnInit(): void {
    this.deviceService.getDevicesNow().subscribe((response: any) => {
      for (let key in response) {
        if (response[key].owner != null && response[key].owner != '') {
          continue;
        }
        this.availableDevices.push(
          new Device(
            response[key].serialNumber,
            response[key].description,
            response[key].type,
            response[key].owner
          )
        );
      }
    });
  }

  onCheckboxChange(e: any) {
    const devicesArray: FormArray = this.myform.get('checkArray') as FormArray;

    if (e.target.checked) {
      devicesArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      devicesArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          devicesArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  createEmployee() { 
    this.employeeService.createEmployee(
      new Employee(
        this.myform.value.id,
        this.myform.value.name,
        this.myform.value.email,
        this.myform.value.checkArray
      )
    );

    const ownerId = this.myform.value.id;

    this.myform.value.checkArray.forEach((deviceId: string) => {
      const device = this.deviceService.getDeviceById(deviceId);
      const editedDevice = new Device( device?.serialNumber as string, device?.description as string, device?.type as number, ownerId as string);

      this.deviceService.editDevice(editedDevice as Device);
    });

    this.router.navigate(['success']);
  }

  
}
