import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreserviceService {

appRoute = {};

constructor() { }

setRoute(key: string, value: string) {
  if(key && value) {
    this.appRoute[key] = value;
  }
}

getRoute() {
  return this.appRoute;
}

}


