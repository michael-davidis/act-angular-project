import { Component, OnInit } from '@angular/core';
import {
  FormArray, FormBuilder, FormControl, FormGroup
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { Employee } from 'src/app/models/Employee';
import { DeviceManagementService } from 'src/app/services/device-management.service';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  currentEmployee!: Employee;
  availableDevices: Device[] = [];
  devicesIds: Array<any> = [];
  myform: FormGroup;

  constructor(
    private activatedroute: ActivatedRoute,
    private employeeService: EmployeeManagementService,
    private deviceService: DeviceManagementService,
    private fb: FormBuilder
  ) {
    this.myform =  new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
        email: new FormControl(),
        checkArray: new FormArray([]),
  });
  }

  ngOnInit(): void {
    let id: string;

    this.activatedroute.paramMap.subscribe((data: any) => {
      id = data.get('id');
      let index = this.employeeService.employees.findIndex((el: any) => {
        return el.id == id;
      });
      this.currentEmployee = this.employeeService.employees[index];
      this.getAvailableDevices();
      this.myform = this.fb.group({
        id: new FormControl(this.currentEmployee.id),
        name: new FormControl(this.currentEmployee.name),
        email: new FormControl(this.currentEmployee.email),
        checkArray: this.fb.array([[this.currentEmployee.devicesId]]),
      });

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

  hasDevice(deviceId: string) {
    if(this.currentEmployee.devicesId != null){
      return this.currentEmployee.devicesId.indexOf(deviceId) > -1;
    }

    return false;
  }

  getAvailableDevices() {
    this.availableDevices = [];
    this.deviceService.getDevicesNow().subscribe((response: any) => {
      for (let key in response) {
        if (
          response[key].owner != this.currentEmployee.id &&
          response[key].owner != null &&
          response[key].owner != ''
        ) {
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

  editEmployee() {
    let devicesArray: Array<any> = [];
    devicesArray.push(this.myform.value.checkArray);
    let editedEmployee: Employee = new Employee(
      this.myform.value.id,
      this.myform.value.name,
      this.myform.value.email,
      devicesArray
    );
    this.employeeService.editEmployee(editedEmployee);
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.currentEmployee);
    this.currentEmployee.devicesId.forEach((el) => {
      const device = this.deviceService.getDeviceById(el);

      if (device != null) {
        this.deviceService.editDevice(
          new Device(device.serialNumber, device.description, device.type, '')
        );
      }
    });
  }
}
