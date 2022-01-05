import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { RouterModule, Routes } from '@angular/router';
import { SmartphonesComponent } from './components/smartphones/smartphones.component';
import { TabletsComponent } from './components/tablets/tablets.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { CreateDeviceComponent } from './components/create-device/create-device.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { ActionSuccessfulComponent } from './components/action-successful/action-successful.component';



const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'smartphones',
    component: SmartphonesComponent,
  },
  {
    path: 'tablets',
    component: TabletsComponent,
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
  },
  {
    path: 'smartphones/:id',
    component: DeviceDetailsComponent,
  },
  {
    path: 'tablets/:id',
    component: DeviceDetailsComponent,
  },
  {
    path: 'createEmployee',
    component: CreateEmployeeComponent,
  },
  {
    path: 'createDevice',
    component: CreateDeviceComponent,
  },
  {
    path: 'success',
    component: ActionSuccessfulComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    SmartphonesComponent,
    TabletsComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
    CreateDeviceComponent,
    DeviceDetailsComponent,
    ActionSuccessfulComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
