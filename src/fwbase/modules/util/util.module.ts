import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'
import { SpinnerComponent } from '@frame/modules/util/components/spinner/spinner.component';

const utilArray = [
  PagenotfoundComponent,
  SpinnerComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...utilArray
  ],
  entryComponents: [
  ],
  exports: [
    ...utilArray
  ],
  providers: []
})
export class UtilModule { }