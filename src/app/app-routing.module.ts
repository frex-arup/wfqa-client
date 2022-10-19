import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UnauthorizedPageComponent } from './shared/components/unauthorized-page/unauthorized-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: '/login'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '401',
    component: UnauthorizedPageComponent
  },
  {
    path: 'login',
    loadChildren: () => import(`./login/login.module`).then(m => m.LoginModule)
  },
  {
    path: 'mro',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./mro/mro.module').then(m => m.MroModule)
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
