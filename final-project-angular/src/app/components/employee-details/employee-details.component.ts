import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { EmployeeManagementService } from 'src/app/services/employee-management.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  myform = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
  });
  currentEmployee!: Employee;

  constructor(private activatedroute: ActivatedRoute, private employeeService: EmployeeManagementService) { }

  ngOnInit(): void {
    let id: string;

    this.activatedroute.paramMap.subscribe( (data: any) => {
        id = data.get("id");
        alert(id);
        let index = this.employeeService.employees.findIndex( (el :any) => {
          return el.id==id
        })
        this.currentEmployee=this.employeeService.employees[index]
    })
  }

  editEmployee(){
    let editedEmployee: Employee = new Employee( this.myform.value.id, this.myform.value.name, this.myform.value.email );

    if ( this.employeeService.employeesIDs[this.myform.value.id] ){
      this.employeeService.deleteEmployee( editedEmployee );
      this.employeeService.createEmployee( editedEmployee );
    } else {
      this.employeeService.editEmployee( editedEmployee );
    }
  }
}
