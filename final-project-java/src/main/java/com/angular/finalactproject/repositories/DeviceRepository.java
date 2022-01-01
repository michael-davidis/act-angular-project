package com.angular.finalactproject.repositories;

import com.angular.finalactproject.entities.Device;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeviceRepository extends JpaRepository<Device, Long> {
}
