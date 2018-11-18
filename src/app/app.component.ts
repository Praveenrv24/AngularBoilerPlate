import { Component } from '@angular/core';
import { AppService } from './../fwbase/modules/core/services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.manageLayout();
  }
  
  manageLayout(){
    this.appService.showHeader(true);
    this.appService.showFooter(true);

  }
  
}


