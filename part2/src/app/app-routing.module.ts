import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupassisComponent } from './groupassis/groupassis.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddgroupComponent } from './addgroup/addgroup.component';
import { UsersComponent } from './users/users.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { GroupviewComponent } from './groupview/groupview.component';
import { AddchannelComponent } from './addchannel/addchannel.component';
import { ChannelviewComponent } from './channelview/channelview.component';
import { AddusertochannelComponent } from './addusertochannel/addusertochannel.component';



const routes: Routes = [{path:'login', component:LoginComponent},
                        {path:'groupassis', component:GroupassisComponent},
                        {path:'profile', component:ProfileComponent},
                        {path:'logout', component:LogoutComponent},
                        {path:'superadmin', component:SuperadminComponent},
                        {path:'adduser', component:AdduserComponent},
                        {path: 'addgroup', component: AddgroupComponent},
                        {path: 'users', component: UsersComponent},
                        {path: 'updateuser', component: UpdateuserComponent},
                        {path: 'groupview', component: GroupviewComponent},
                        {path: 'addchannel', component: AddchannelComponent},
                        {path: 'channelview', component: ChannelviewComponent},
                        {path:'addusertochannel', component: AddusertochannelComponent}

                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
