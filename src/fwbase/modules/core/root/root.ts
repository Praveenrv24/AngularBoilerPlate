import { combineLatest, observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


export class Root {
    constructor(private route: ActivatedRoute) {
        const routeSubscription = combineLatest(this.route.params, this.route.queryParams,
            (p, q) => ({
                p, q
            })
        );

        routeSubscription.subscribe((p) => {
            console.log(p);
        });
    }
}