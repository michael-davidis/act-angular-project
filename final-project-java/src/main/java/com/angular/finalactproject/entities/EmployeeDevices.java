package com.angular.finalactproject.entities;

import javax.persistence.*;

@Entity
@Table(name = "employee_devices")
public class EmployeeDevices {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "employee")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "device")
    private Device device;

    public EmployeeDevices() {
    }

    public EmployeeDevices(Long id, Employee employee, Device device) {
        this.id = id;
        this.employee = employee;
        this.device = device;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }
}
