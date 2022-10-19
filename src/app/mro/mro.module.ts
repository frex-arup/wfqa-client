import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MroComponent } from './mro.component';
import { SharedModule } from 'primeng/api';
import { SharedComponentsModule } from '../shared/components/shared-components.module';

const route: Routes = [
  {
    path:'',
    component: MroComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'input-lab-results',
        loadChildren: () => import('./components/input-lab-result/input-lab-result.module').then(m => m.InputLabResultModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    MroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    SharedComponentsModule
  ], exports: [
    RouterModule
  ]
})
export class MroModule { }
