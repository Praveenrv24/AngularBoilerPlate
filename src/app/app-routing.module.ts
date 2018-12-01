import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadingStrategy } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ResolverService } from './services/resolver.service';
import { PagenotfoundComponent } from '@frame/modules/util/components/pagenotfound/pagenotfound.component';
const groupRoutes = [
  // {
  //   path: '',
  //   component: ,
  // }
];
const childRoutes = [
  // {
  //   path: '',
  //   component: ,
  // }
];
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingComponent,
   // canActivate: [EMSGuard]
  },
  {
    path: '**',
    component: PagenotfoundComponent
  },
  {
    path: ':group',
    children: [
      ...childRoutes
    ]
  },
  // {
  //   path: '',
  //   component: ,
  //   resolve: [ResolverService],
  //   canActivate: [EMSGuard]
  // },
 
  ...groupRoutes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
