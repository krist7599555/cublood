import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, TRANSLATIONS } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NoticePageComponent } from './notice-page/notice-page.component';
import { AnnouncementPageComponent } from './announcement-page/announcement-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

// import localeEn from '@angular/common/locales/en-US-POSIX';
// import { registerLocaleData } from '@angular/common';
import { HomePageModule } from './home-page/home-page.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import { NoticePageModule } from './notice-page/notice-page.module';
// registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    AnnouncementPageComponent,
    ContactPageComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    NoticePageModule,
    AppRoutingModule,
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: "en" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
