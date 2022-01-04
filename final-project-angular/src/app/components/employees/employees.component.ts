import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private router: Router, private employeeManagementService: EmployeeManagementService) {
    
  }

  ngOnInit(): void {
    this.employees = this.employeeManagementService.employees;
  }

  goBack(){
    this.router.navigate(['home']);
  }

  viewEmployee(id: number){
    this.router.navigate(['employees', id])
  }
}
