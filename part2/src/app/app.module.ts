import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChatService } from './services/chatservice.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GroupassisComponent } from './groupassis/groupassis.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { UsersComponent } from './users/users.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { GroupviewComponent } from './groupview/groupview.component';
import { AddchannelComponent } from './addchannel/addchannel.component';
import { ChannelviewComponent } from './channelview/channelview.component';
import { AddusertochannelComponent } from './addusertochannel/addusertochannel.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupassisComponent,
    ProfileComponent,
    LogoutComponent,
    SuperadminComponent,
    AdduserComponent,
    AddgroupComponent,
    UsersComponent,
    UpdateuserComponent,
    GroupviewComponent,
    AddchannelComponent,
    ChannelviewComponent,
    AddusertochannelComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
