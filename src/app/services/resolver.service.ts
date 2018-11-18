import { Injectable, NgZone } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/internal/observable/of';


@Injectable({
    providedIn: 'root'
})
export class ResolverService implements Resolve<any> {
    constructor() { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return of(true);
    }
}
