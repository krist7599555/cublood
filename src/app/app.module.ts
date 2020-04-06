import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, TRANSLATIONS } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticePageComponent } from './notice-page/notice-page.component';
import { AnnouncementPageComponent } from './announcement-page/announcement-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageModule } from './home-page/home-page.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { NoticePageModule } from './notice-page/notice-page.module';
import { ComponentModule } from './component/component.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    AnnouncementPageComponent,
    ContactPageComponent,
    AboutPageComponent,
  ],
  imports: [
    ComponentModule,
    BrowserModule,
    HomePageModule,
    NoticePageModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: "en" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
