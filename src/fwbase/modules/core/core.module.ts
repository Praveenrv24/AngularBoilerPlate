import { FwbaseRoutingModule } from './../../fwbase-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FrameRootComponent } from './components/frame-root/frame-root.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const coreArray = [
  FrameRootComponent,
  HeaderComponent,
  FooterComponent
];

@NgModule({
  imports: [
    CommonModule,
    FwbaseRoutingModule
  ],
  declarations: [
    ...coreArray
  ],
  entryComponents: [],
  exports: [
    ...coreArray
  ],
  providers: []
})
export class CoreModule { }
