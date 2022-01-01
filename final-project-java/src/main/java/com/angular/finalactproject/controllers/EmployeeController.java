package com.angular.finalactproject.controllers;

import com.angular.finalactproject.entities.Employee;
import com.angular.finalactproject.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    private final EmployeeService eService;

    public EmployeeController(@Autowired EmployeeService eService) {
        this.eService = eService;
    }

    @GetMapping("/employees")
    public ResponseEntity<?> getAllEmployees() {
        List employees = eService.findEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable("id") Long id) {
        Employee employee = eService.findEmployeeById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/newEmployee")
    public ResponseEntity<?> newEmployee(@RequestBody Employee employee) {
        return new ResponseEntity<>(eService.saveEmployee(employee), HttpStatus.OK);
    }

    @PutMapping("/updateEmployee/{id}")
    public ResponseEntity<?> updateEmployee(@RequestBody Employee employee,
                                            @PathVariable("id") Long id) {
        if (id > 0) {
            Employee updatedEmployee = eService.findEmployeeById(id);
            updatedEmployee = employee;
            eService.updateEmployee(updatedEmployee);
            return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/deleteEmployee/{id}")
    public ResponseEntity<?> deleteEmployeeById(@PathVariable("id") Long id) {
        eService.deleteEmployeeById(id);
        return new ResponseEntity<>("employee deleted", HttpStatus.OK);
    }
}
