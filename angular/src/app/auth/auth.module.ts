import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ComponentModule } from '../component/component.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, ProfilePageComponent],
  exports: [LoginPageComponent, RegisterPageComponent, ProfilePageComponent],
  imports: [CommonModule, ComponentModule, RouterModule]
})
export class AuthModule { }
