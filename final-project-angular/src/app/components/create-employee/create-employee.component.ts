import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/Employee';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  myform = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
  });

  constructor(private employeeService: EmployeeManagementService) {}

  ngOnInit(): void {}

  createUser(){
    this.employeeService.createEmployee( new Employee( this.myform.value.id, this.myform.value.name, this.myform.value.email ) );
  }
}
