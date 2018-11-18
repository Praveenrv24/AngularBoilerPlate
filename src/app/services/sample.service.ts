
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SampleService {
  public triggerChanged = new Subject<any>();
  public triggerChanged$ = this.triggerChanged.asObservable();

  constructor( ) {}

}
