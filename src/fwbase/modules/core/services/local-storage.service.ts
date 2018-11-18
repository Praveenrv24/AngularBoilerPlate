
import {of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    constructor() {
    }
    set(key: string, data: any): Observable<string> {
        try {
            window.localStorage.setItem(key, data);
            return observableOf('success');
        } catch (e) {
            return observableOf('failure');
        }
    }

    get(key: string): Observable<any> {
        const userData = window.localStorage.getItem(key);
        return observableOf(userData);
    }
}
