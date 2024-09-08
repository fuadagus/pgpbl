import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { LoginPageModule } from '../login/login.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    LoginPageModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
