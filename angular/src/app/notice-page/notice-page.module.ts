import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NoticePageComponent } from './notice-page.component';
import { ComponentModule } from '../component/component.module';



@NgModule({
  declarations: [ListComponent, NoticePageComponent],
  imports:      [CommonModule, ComponentModule],
  exports:      [NoticePageComponent]
})
export class NoticePageModule { }
