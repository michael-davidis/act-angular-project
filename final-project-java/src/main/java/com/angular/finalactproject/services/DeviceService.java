package com.angular.finalactproject.services;


import com.angular.finalactproject.entities.Device;

import java.util.List;

public interface DeviceService {

    public List<Device> findDevices();

    public Device findDeviceById(Long devId);

    public Device saveDevice(Device device);

    public Device updateDevice(Device device);

    public void deleteDeviceById(Long devId);
}
