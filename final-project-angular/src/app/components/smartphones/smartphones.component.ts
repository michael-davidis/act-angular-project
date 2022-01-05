import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { DeviceManagementService } from 'src/app/services/device-management.service';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {
  smartphones: Device[] = [];

  constructor( private router: Router, private deviveManagementService: DeviceManagementService ) { }

  ngOnInit(): void {
    this.smartphones = this.deviveManagementService.devices.filter( device => device.type == 1 );
  }

  viewSmartphone(id: string){
    this.router.navigate(['smartphones', id]);
  }

}
