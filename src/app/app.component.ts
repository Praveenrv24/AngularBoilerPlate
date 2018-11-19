import { Component } from '@angular/core';
import { AppService } from '@frame/services/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private appService: AppService) { }

  ngOnInit() {
    // this.manageLayout(); // uncomment for managing the header and footer
  }
  
  // Method for controlling header and footer
  manageLayout(){
    this.appService.showHeader(false);
    this.appService.showFooter(false);
  }
  
}


