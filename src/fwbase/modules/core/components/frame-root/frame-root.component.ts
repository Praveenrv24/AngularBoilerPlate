import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'app-frame-root',
  templateUrl: './frame-root.component.html',
  styleUrls: ['./frame-root.component.css']
})
export class FrameRootComponent implements OnInit {
  isHeaderEnabled;
  isFooterEnabled;

  constructor(private appService: AppService,
              public cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    
    this.appService.headerChanged$.subscribe((data) => {
      this.isHeaderEnabled = data;
     });

     this.appService.footerChanged$.subscribe((data) => {
      this.isFooterEnabled = data;
     });

  }
  
  detectChanges() {
    this.cd.detectChanges();
  }
  

}
