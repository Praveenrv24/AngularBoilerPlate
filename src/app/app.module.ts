import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FwbaseModule } from './../fwbase/fwbase.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';


const baseComponents = [
  LandingComponent
  ];
const Modules = [
  AppRoutingModule,
  FwbaseModule
  ];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ...Modules ],
  declarations: [ AppComponent, ...baseComponents ],
  entryComponents: [...baseComponents],
  exports: [],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
