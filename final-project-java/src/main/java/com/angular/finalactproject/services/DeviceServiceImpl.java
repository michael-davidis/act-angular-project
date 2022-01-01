package com.angular.finalactproject.services;

import com.angular.finalactproject.entities.Device;
import com.angular.finalactproject.repositories.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class DeviceServiceImpl implements DeviceService{

    private final DeviceRepository deviceRepo;

    @Autowired
    public DeviceServiceImpl(DeviceRepository deviceRepo) {
        this.deviceRepo = deviceRepo;
    }

    @Override
    public List<Device> findDevices() {
        return deviceRepo.findAll();
    }

    @Override
    public Device findDeviceById(Long devId) {
        return deviceRepo.findById(devId).get();
    }

    @Override
    public Device saveDevice(Device device) {
        return deviceRepo.save(device);
    }

    @Override
    public Device updateDevice(Device device) {
        Device d = deviceRepo.findById(device.getId()).get();
        d.setDescription(device.getDescription());
        d.setType(device.getType());
        return d;
    }

    @Override
    public void deleteDeviceById(Long devId) {
        deviceRepo.deleteById(devId);
    }
}
