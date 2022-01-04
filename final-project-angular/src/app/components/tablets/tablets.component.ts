import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/Device';
import { DeviceManagementService } from 'src/app/services/device-management.service';

@Component({
  selector: 'app-tablets',
  templateUrl: './tablets.component.html',
  styleUrls: ['./tablets.component.css']
})
export class TabletsComponent implements OnInit {
  tablets: Device[] = [];

  constructor( private router: Router, private deviveManagementService: DeviceManagementService ) { }

  ngOnInit(): void {
    this.tablets = this.deviveManagementService.devices.filter( device => device.type == 2 );
  }

  viewTablet( id: string){
    this.router.navigate(['tablets', id])
  }

}
