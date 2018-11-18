import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  public headerChanged = new BehaviorSubject<any>({});
  public headerChanged$ = this.headerChanged.asObservable();

  public footerChanged = new BehaviorSubject<any>({});
  public footerChanged$ = this.footerChanged.asObservable();

  constructor() { }

  showHeader(show: boolean) {
    this.headerChanged.next(show);
  }

  showFooter(show: boolean) {
    this.footerChanged.next(show);
  }
}
