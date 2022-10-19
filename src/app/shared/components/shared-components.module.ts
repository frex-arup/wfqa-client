import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UnauthorizedPageComponent } from './unauthorized-page/unauthorized-page.component';

@NgModule({
    declarations: [
        SidenavComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
        UnauthorizedPageComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SidenavComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedComponentsModule { }
