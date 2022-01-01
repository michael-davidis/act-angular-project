import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService {
  employees: Employee[] = [];

  constructor(private http: HttpClient) {
    // this.getEmployees();
  }

  getEmployees(): void {
    // this.http
    //   .get(
    //     'https://typescript-ddaddefault-rtdb.firebaseio.com/Employees.json'
    //   )
    //   .subscribe((response: any) => {
    //     for (let key in response) {
    //       this.employees.push(
    //         new Employee(key, response[key].name, response[key].email)
    //       );
    //     }
    //   });
  }

  editEmployee(employee: Employee) {
    // this.http
    //   .put(
    //     'https://typescript-dwadaw-default-rtdb.firebaseio.com/Employees/' +
    //       employee.id +
    //       '.json',
    //     {
    //       id: employee.id,
    //       name: 'changed name',
    //       email: 'changed_email@gmail.com',
    //     }
    //   )
    //   .subscribe((response: any) => {
    //     let newEmp = response;
    //     let index = this.employees.findIndex((el) => {
    //       return (el.id = newEmp.id);
    //     });

    //     this.employees[index] = newEmp;
    //   });
  }

  deleteEmployee(employee: Employee) {
    // this.http
    //   .delete("https://typescript-c394dsddsb-default-rtdb.firebaseio.com/Employees/" + employee.id + ".json")
    //   .subscribe((response: any) => {
    //     console.log(response);
    //   });
  }

  getDevicesOfOneEmployee(employee: Employee) {
    // TODO
  }
}
