import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FwbaseRoutingModule } from './fwbase-routing.module';
import { CoreModule } from './modules/core/core.module';
import { UtilModule } from './modules/util/util.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const fwModules = [
  FwbaseRoutingModule,
  CoreModule,
  UtilModule,
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule
];
const fwExposed = [];

@NgModule({
  imports: [
    ...fwModules
  ],
  declarations: [
    ...fwExposed
  ],
  exports: [
    ...fwModules,
    ...fwExposed
  ],
  providers: []
})
export class FwbaseModule {
  construnctor(
    @Optional() @SkipSelf() fwbaseModule: FwbaseModule) {
    if (fwbaseModule) {
      throw new Error("Fwbase Module Already imported");
    }
  }

}
