import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'

const utilArray = [
  PagenotfoundComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PagenotfoundComponent
  ],
  entryComponents: [
   // PagenotfoundComponent
  ],
  exports: [
    ...utilArray
  ],
  providers: []
})
export class UtilModule { }