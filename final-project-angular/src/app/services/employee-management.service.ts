import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService {
  employees: Employee[] = [];
  employeesIDs: any[] = [];

  constructor(private http: HttpClient) {
    // this.employees = [new Employee(1, "Michael", "michael@gmail.com"), new Employee(2, "John", "john@gmail.com"), new Employee(3, "George", "george@gmail.com")];
    // for (let employee of this.employees) {
    //   this.http.post("https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Employees.json", employee).subscribe(() => {
    //   });
    // }
    this.getEmployeesData();
  }

  createEmployee(employee: Employee){
      this.http.post("https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Employees.json", employee).subscribe((response) => {
        this.getEmployeesData();
      });
  }

  getEmployeesData(): void {
    this.http
      .get(
        'https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Employees.json'
      )
      .subscribe((response: any) => {
        for (let key in response) {
          this.employees.push(
            new Employee(
              response[key].id,
              response[key].name,
              response[key].email
            )
          );

          this.employeesIDs[response[key].id] = key + '';
        }
      });
  }

  editEmployee(employee: Employee) {
    // this.http
    //   .put(
    //     'https://typescript-dwadaw-default-rtdb.firebaseio.com/Employees/' +
    //       this.employeesIDs[employee.id] +
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
