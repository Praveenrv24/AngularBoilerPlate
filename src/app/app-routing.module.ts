import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadingStrategy } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ResolverService } from './services/resolver.service';
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
  {
    path: '**',
    redirectTo: '/404'
  },
  ...groupRoutes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
