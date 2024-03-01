import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { RegistrationManagerComponent } from './registration-manager/registration-manager.component';
// import { HttpClient } from '@angular/common/http';
// import { country } from '../country';

import { state } from '@angular/animations';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MenubarModule } from 'primeng/menubar';
import { TagModule } from "primeng/tag"; 
import { TableModule } from 'primeng/table';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { PendingStatusComponent } from './pending-status/pending-status.component';
import { StatusComponent } from './status/status.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './service/api-service.service';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';


@NgModule({
  declarations: [
    AppComponent,

    RegistrationManagerComponent,
    DashBoardComponent,
    AdminDetailsComponent,
    PendingStatusComponent,
    StatusComponent,
    ManagerLoginComponent,
    ProfilePictureComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    ImageModule,
    MenubarModule,
    TagModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    AnimateOnScrollModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AvatarModule
  ],
  providers: [
    provideClientHydration(),
    // country,
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
