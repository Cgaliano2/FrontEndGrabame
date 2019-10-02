import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrayListComponent } from './components/tray-list/tray-list.component';
import { TrayComponent } from './components/tray/tray.component';
import {SearchDateComponent} from './components/search-date/search-date.component';
import { LoginComponent } from './_auth/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { SearchDateRangeComponent } from './components/search-date-range/search-date-range.component';


// guard
import { AuthGuard } from './_guards/auth.guard';



const APP_ROUTES: Routes = [

   {path: '', component: HomeComponent, canActivate: [AuthGuard] }, // canActivate: [AuthGuard]
    {path: 'tray-list',  canActivate: [AuthGuard],component: TrayListComponent, 
    children: [
    {path: 'search-date/:term', component: SearchDateComponent, canActivate: [AuthGuard]}
     ]},
 {path: 'tray/:id', component: TrayComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'ubicacion', component: UbicacionComponent, canActivate: [AuthGuard]},
    {path: 'search-dateRange/:term', component: SearchDateRangeComponent, canActivate:[AuthGuard] }, // canActivate: [AuthGuard]
    {path: '**', redirectTo: ''}
// canActivate: [HomeGuard], canLoad: [HomeGuard]
//

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });  // { useHash: true }

