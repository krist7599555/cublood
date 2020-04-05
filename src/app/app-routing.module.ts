import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementPageComponent } from './announcement-page/announcement-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoticePageComponent } from './notice-page/notice-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'notice', component: NoticePageComponent },
  { path: 'announcement', component: AnnouncementPageComponent },
  { path: 'contact', component: ContactPageComponent },
  // { path: '**', compannonent: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
