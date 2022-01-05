import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceManagementService } from 'src/app/services/device-management.service';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private employeeService: EmployeeManagementService, private deviceService: DeviceManagementService) {}

  ngOnInit(): void {
    this.employeeService.getEmployeesData();
    this.deviceService.getDevices();
  }

  createEmployee() {
    this.router.navigate(['createEmployee']);
  }

  createDevice(){
    this.router.navigate(['createDevice']);
  }
}
