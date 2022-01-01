package com.angular.finalactproject.controllers;

import com.angular.finalactproject.entities.Device;
import com.angular.finalactproject.entities.Employee;
import com.angular.finalactproject.entities.EmployeeDevices;
import com.angular.finalactproject.services.DeviceService;
import com.angular.finalactproject.services.EmployeeDevicesService;
import com.angular.finalactproject.services.EmployeeService;
import com.mysql.cj.x.protobuf.Mysqlx;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    private final EmployeeService eService;
    private final EmployeeDevicesService emplDevService;
    private final DeviceService dService;

    public EmployeeController(@Autowired EmployeeService eService,
                              @Autowired EmployeeDevicesService emplDevService,
                              @Autowired DeviceService dService) {
        this.eService = eService;
        this.emplDevService = emplDevService;
        this.dService = dService;
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

    @PostMapping("/employee/addDevice/{id}")
    public ResponseEntity<?> addDeviceToEmployee(@RequestBody Employee employee,
                                                 @PathVariable("id") Long id) {
        Device device = dService.findDeviceById(id);
        EmployeeDevices employeeDevices = new EmployeeDevices(employee, device);
        emplDevService.saveDeviceToEmployee(employeeDevices);

        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @GetMapping("/deleteEmployee/{id}")
    public ResponseEntity<?> deleteEmployeeById(@PathVariable("id") Long id) {
        eService.deleteEmployeeById(id);
        return new ResponseEntity<>("employee deleted", HttpStatus.OK);
    }
}
