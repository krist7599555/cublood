import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ComponentModule } from '../component/component.module';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from "@angular/common/http"


@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, ProfilePageComponent],
  exports:      [LoginPageComponent, RegisterPageComponent, ProfilePageComponent],
  imports:      [CommonModule, ComponentModule, RouterModule, HttpClientModule],
  providers:    [AuthService]
})
export class AuthModule { }
