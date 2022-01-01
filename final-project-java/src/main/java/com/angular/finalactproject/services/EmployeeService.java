package com.angular.finalactproject.services;

import com.angular.finalactproject.entities.Employee;

import java.util.List;

public interface EmployeeService {

    public List<Employee> findEmployees();

    public Employee findEmployeeById(Long empId);

    public Employee saveEmployee(Employee employee);

    public Employee updateEmployee(Employee employee);

    public void deleteEmployeeById(Long empId);

}
