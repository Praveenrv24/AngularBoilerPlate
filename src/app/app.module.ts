import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FwbaseModule } from '@frame/fwbase.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import {HttpClient, HttpClientModule} from '@angular/common/http';

const baseComponents = [
  LandingComponent
  ];
const Modules = [
  AppRoutingModule,
  HttpClientModule,
  FwbaseModule
  ];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ...Modules,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
   ],
  declarations: [ AppComponent, ...baseComponents ],
  entryComponents: [],
  exports: [],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
