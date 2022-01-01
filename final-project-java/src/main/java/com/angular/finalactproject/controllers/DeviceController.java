package com.angular.finalactproject.controllers;

import com.angular.finalactproject.entities.Device;
 import com.angular.finalactproject.services.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DeviceController {

    private final DeviceService dService;

    public DeviceController(@Autowired DeviceService dService) {
        this.dService = dService;
    }

    @GetMapping("/devices")
    public ResponseEntity<?> getAllDevices() {
        List devices = dService.findDevices();
        return new ResponseEntity<>(devices, HttpStatus.OK);
    }

    @GetMapping("/device/{id}")
    public ResponseEntity<?> getDeviceById(@PathVariable("id") Long id) {
        Device device = dService.findDeviceById(id);
        return new ResponseEntity<>(device, HttpStatus.OK);
    }

    @PostMapping("/newDevice")
    public ResponseEntity<?> newDevice(@RequestBody Device device) {
        return new ResponseEntity<>(dService.saveDevice(device), HttpStatus.OK);
    }

    @PutMapping("/updateDevice/{id}")
    public ResponseEntity<?> updateDevice(@RequestBody Device device,
                                          @PathVariable("id") Long id) {
        if (id > 0) {
            Device updatedDevice = dService.findDeviceById(id);
            updatedDevice = device;
            dService.updateDevice(updatedDevice);
            return new ResponseEntity<>(updatedDevice, HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/deleteDevice/{id}")
    public ResponseEntity<?> deleteDeviceById(@PathVariable("id") Long id) {
        dService.deleteDeviceById(id);
        return new ResponseEntity<>("device deleted", HttpStatus.OK);
    }

}
