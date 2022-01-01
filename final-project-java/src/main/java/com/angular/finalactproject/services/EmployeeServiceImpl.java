package com.angular.finalactproject.services;

import com.angular.finalactproject.entities.Employee;
import com.angular.finalactproject.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService{

    private final EmployeeRepository employeeRepo;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    @Override
    public List<Employee> findEmployees() {
        return employeeRepo.findAll();
    }

    @Override
    public Employee findEmployeeById(Long empId) {
        return employeeRepo.findById(empId).get();
    }

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepo.save(employee);
    }

    @Override
    public Employee updateEmployee(Employee employee) {
        Employee e = employeeRepo.findById(employee.getId()).get();
        e.setName(employee.getName());
        e.setEmail(employee.getEmail());
        return e;
    }

    @Override
    public void deleteEmployeeById(Long empId) {
        employeeRepo.deleteById(empId);
    }
}
