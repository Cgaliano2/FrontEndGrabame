import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrayListComponent } from './components/tray-list/tray-list.component';
import { TrayComponent } from './components/tray/tray.component';
import {SearchDateComponent} from './components/search-date/search-date.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//guard
import { AuthGuard } from './_guards/auth.guard';

const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent}, // canActivate: [AuthGuard]
    {path: 'tray-list', component: TrayListComponent},
    {path: 'tray/:id', component: TrayComponent},
    {path: 'search-date/:term', component: SearchDateComponent },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    //{path: '**', pathMatch: 'full' , redirectTo: 'home'}

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,  { useHash: true });

