import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputLabResultComponent } from './input-lab-result.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from 'src/app/shared/services/AuthGuard ';

const route: Routes = [
  {
    path: '',
    component: InputLabResultComponent,
    children: [
      {
        path:'',
        canActivate: [AuthGuard],
        component: LandingPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    InputLabResultComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    SharedComponentsModule
  ],
  exports: [
    RouterModule
  ]
})
export class InputLabResultModule { }
