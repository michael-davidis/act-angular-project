import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './components/devices/devices.component';


const appRoutes: Routes = [
  {
    path: 'home', // or empty, it's the same
    component: AppComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'devices',
    component: DevicesComponent,
  },
  {
    path: 'employees/:id',
    component: DevicesComponent,
  },
  {
    path: 'devices/:id',
    component: DevicesComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { // Sends to if there is something wrong with the path
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
