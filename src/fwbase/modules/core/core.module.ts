import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FrameRootComponent } from './components/frame-root/frame-root.component';

const coreArray = [
  FrameRootComponent
];

@NgModule({
  imports: [],
  declarations: [
    ...coreArray
  ],
  exports: [
    FrameRootComponent
  ],
  providers: []
})
export class CoreModule { }
