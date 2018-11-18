import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './modules/util/components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '404',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FwbaseRoutingModule { }
