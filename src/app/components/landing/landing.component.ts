import { ActivatedRoute } from '@angular/router';
import { AppRoot } from './../../utils/app-root';
import { Component, OnInit } from '@angular/core';
import { InternationalizationService } from '@frame/services/internationalization.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent extends AppRoot implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private interService: InternationalizationService
  ) {
    super(router, interService);
   }

  ngOnInit() {
  }

}