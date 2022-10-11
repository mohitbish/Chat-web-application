import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { GroupadminComponent } from './groupadmin/groupadmin.component';
import { GroupassisComponent } from './groupassis/groupassis.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
    SuperadminComponent,
    GroupadminComponent,
    GroupassisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
