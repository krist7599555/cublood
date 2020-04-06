import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from './headline/headline.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeadlineComponent, FooterComponent, NavigationComponent],
  exports: [HeadlineComponent, FooterComponent, NavigationComponent],
  imports: [CommonModule, RouterModule]
})
export class ComponentModule { }
