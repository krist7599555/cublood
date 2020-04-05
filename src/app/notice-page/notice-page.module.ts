import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NoticePageComponent } from './notice-page.component';
import { HeadComponent } from './head/head.component';



@NgModule({
  declarations: [ListComponent, NoticePageComponent, HeadComponent],
  imports: [CommonModule],
  exports: [NoticePageComponent]
})
export class NoticePageModule { }
