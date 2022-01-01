package com.angular.finalactproject.repositories;

import com.angular.finalactproject.entities.EmployeeDevices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeDevicesRepository extends JpaRepository<EmployeeDevices, Long> {


}
