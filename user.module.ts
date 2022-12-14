import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserPage } from './user.page';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    SharedModule
  ],
  declarations: [
    UserPage,
    RegisterComponent,
    SigninComponent,
    ChangePasswordComponent,
    ProfileComponent,
    NotificationsComponent
  ]
})
export class UserPageModule { }
