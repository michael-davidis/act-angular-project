package com.angular.finalactproject.services;

import com.angular.finalactproject.entities.EmployeeDevices;
import com.angular.finalactproject.repositories.EmployeeDevicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class EmployeeDevicesServiceImpl implements EmployeeDevicesService{

    private final EmployeeDevicesRepository employeeDevRepo;

    public EmployeeDevicesServiceImpl(@Autowired EmployeeDevicesRepository employeeDevRepo) {
        this.employeeDevRepo = employeeDevRepo;
    }

    @Override
    public EmployeeDevices saveDeviceToEmployee(EmployeeDevices eDevice) {
        return employeeDevRepo.save(eDevice);
    }
}
