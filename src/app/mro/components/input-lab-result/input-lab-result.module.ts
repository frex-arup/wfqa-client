import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputLabResultComponent } from './input-lab-result.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from 'src/app/shared/services/AuthGuard ';
import { InputLabResultDetailComponent } from './input-lab-result-detail/input-lab-result-detail.component';

const route: Routes = [
  {
    path: '',
    component: InputLabResultComponent,
    children: [
      {
        path:'',
        canActivate: [AuthGuard],
        component: LandingPageComponent
      },
      {
        path:'detail',
        canActivate: [AuthGuard],
        component: InputLabResultDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    InputLabResultComponent,
    LandingPageComponent,
    InputLabResultDetailComponent
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
