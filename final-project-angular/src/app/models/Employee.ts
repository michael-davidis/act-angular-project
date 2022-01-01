import { Device } from './Device';

export class Employee {
  id: number;
  name: string;
  email: string;
  devicesList: Device[] = [];

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
