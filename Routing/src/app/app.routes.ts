import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'login',component:LoginComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'',component:HomeComponent},
    {path:'profile',component:ProfileComponent,data:{name:'harsh',age:'12'}},
    {path:'user/:id/:name',component:UserComponent},
    {path:'**',component:PageNotFoundComponent}
];
