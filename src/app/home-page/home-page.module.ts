import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CalendaComponent } from './calenda/calenda.component';
import { BloodtypeComponent } from './bloodtype/bloodtype.component';
import { FacebookComponent } from './facebook/facebook.component';
import { HomePageComponent } from './home-page.component';
import { MinicalendaComponent } from './minicalenda/minicalenda.component';
import { PostComponent } from './facebook/post/post.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AnnouncementComponent,
    CalendaComponent,
    BloodtypeComponent,
    FacebookComponent,
    HomePageComponent,
    MinicalendaComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
