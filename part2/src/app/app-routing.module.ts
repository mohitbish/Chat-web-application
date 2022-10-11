import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupassisComponent } from './groupassis/groupassis.component';
import { GroupadminComponent } from './groupadmin/groupadmin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { SuperadminComponent } from './superadmin/superadmin.component';


const routes: Routes = [{path:'login', component:LoginComponent},
                        {path:'groupassis', component:GroupassisComponent},
                        {path:'profile', component:ProfileComponent},
                        {path:'logout', component:LogoutComponent},
                        {path:'superadmin', component:SuperadminComponent},
                        {path:'groupadmin', component:GroupadminComponent},

                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
