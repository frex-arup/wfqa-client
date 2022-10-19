import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
// import { FileSaverModule } from 'ngx-filesaver';
import { ListboxModule } from 'primeng/listbox';
import { OrderListModule } from 'primeng/orderlist';
import { AccordionModule } from 'primeng/accordion';
import { TooltipModule } from 'primeng/tooltip';
import { PickListModule } from 'primeng/picklist';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UnauthorizedPageComponent } from './components/unauthorized-page/unauthorized-page.component';


const dModules = [ImageModule,
  OverlayPanelModule,
  AccordionModule,
  CommonModule,
  //  FileSaverModule,
  FormsModule,
  OrderListModule,
  ReactiveFormsModule,
  CardModule,
  ButtonModule,
  TranslateModule,
  ListboxModule,
  ChartModule,
  TableModule,
  SelectButtonModule,
  DialogModule,
  DynamicDialogModule,
  TooltipModule,
  PickListModule];

@NgModule({
  declarations: [],
  imports: dModules,
  exports: dModules
})
export class SharedModule { }
