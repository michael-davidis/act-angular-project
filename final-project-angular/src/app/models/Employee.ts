import { Device } from './Device';

export class Employee {
  id: number;
  name: string;
  email: string;
  devicesId: Array<string> = [];

  constructor(id: number, name: string, email: string, devicesId: Array<string>) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.devicesId = devicesId;
  }
}
