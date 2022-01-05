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
    this.getEmployeesData();
  }

  createEmployee(employee: Employee){
      this.http.post("https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Employees.json", employee).subscribe((response) => {
        this.getEmployeesData();
      });
  }

  getEmployeesData(): void {
    this.employees = [];
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
              response[key].email,
              response[key].devicesId
            )
          );

          this.employeesIDs[response[key].id] = key + '';
        }
      });
  }

  editEmployee(employee: Employee) {
    console.log(employee);
    this.http
      .put(
        'https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Employees/' +
          this.employeesIDs[employee.id] +
          '.json',
        {
          id: employee.id,
          name: employee.name,
          email: employee.email,
          devicesId: employee.devicesId
        }
      )
      .subscribe((response: any) => {
        this.getEmployeesData();
      });
  }

  deleteEmployee(employee: Employee) {
    this.http
      .delete('https://act-final-project-default-rtdb.europe-west1.firebasedatabase.app/Employees/' + this.employeesIDs[employee.id] + ".json")
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
