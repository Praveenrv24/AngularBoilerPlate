import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() { }

  log(message: any): void {
    console.log(`Message`, message);
  }

  error(message: any): void {

    console.log(`Error :  ${message}`, 'color: #ff0000;');
  }
}
