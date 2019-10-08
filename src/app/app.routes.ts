import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// Auth Component
import { LoginComponent } from './_auth/login/login.component';
// Componente Bandejas
import { TrayListComponent } from './components/TrayComponents/tray-list/tray-list.component';
import { TrayComponent } from './components/TrayComponents/tray/tray.component';
import { UbicacionComponent } from './components/TrayComponents/ubicacion/ubicacion.component';
import { SearchDateRangeComponent } from './components/TrayComponents/search-date-range/search-date-range.component';
import { SearchBarcodeComponent } from './components/TrayComponents/search-barcode/search-barcode.component';
import {SearchDateComponent} from './components/TrayComponents/search-date/search-date.component';
import { SearchTrayUserComponent } from './components/TrayComponents/search-tray-user/search-tray-user.component';
import { TrayDateRangeUserComponent } from './components/TrayComponents/tray-date-range-user/tray-date-range-user.component';
// User Component
import { RegisterComponent } from './components/UserComponets/register/register.component';
import { GetUsersComponent } from './components/UserComponets/get-users/get-users.component';
import { SearchUserComponent } from './components/UserComponets/search-user/search-user.component';
import { DeleteUsersComponent  } from './components/UserComponets/delete-users/delete-users.component';
import { UpdateUsersComponent } from './components/UserComponets/update-users/update-users.component';
// type Tray
import { CreateTypeTrayComponent } from './components/TypeTray/create-type-tray/create-type-tray.component';









// guard
import { AuthGuard } from './_guards/auth.guard';



const APP_ROUTES: Routes = [

    {path: '', component: HomeComponent, canActivate: [AuthGuard] }, // canActivate: [AuthGuard]
    {path: 'login', component: LoginComponent},
    
    {path: 'tray-list',  canActivate: [AuthGuard], component: TrayListComponent,
    children: [
    {path: 'search-date/:term', component: SearchDateComponent, canActivate: [AuthGuard]},
    {path: 'search-dateRange/:term', component: SearchDateRangeComponent, canActivate: [AuthGuard]},
    {path: 'search-barcode/:codigoQr', component: SearchBarcodeComponent, canActivate: [AuthGuard]},
    {path: 'search-tray-user/:rut', component: SearchTrayUserComponent, canActivate: [AuthGuard]},
    {path: 'tray-date-range-user/:termino', component: TrayDateRangeUserComponent, canActivate: [AuthGuard]},
     ]},
    {path: 'tray/:id', component: TrayComponent, canActivate: [AuthGuard]},
    {path: 'ubicacion', component: UbicacionComponent, canActivate: [AuthGuard]},
    // users
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'update-user/:id', component: UpdateUsersComponent, canActivate: [AuthGuard]},
    {path: 'get-users', component: GetUsersComponent,children:[
    {path: 'search-user/:rut', component: SearchUserComponent, canActivate: [AuthGuard]},
    ]},
   
    {path: 'delete-user/:rut', component: DeleteUsersComponent, canActivate: [AuthGuard]},
   // type Tray
   
   {path: 'register/traytype', component: CreateTypeTrayComponent, canActivate: [AuthGuard]},
     // canActivate: [AuthGuard]
    {path: '**', redirectTo: ''}
// canActivate: [HomeGuard], canLoad: [HomeGuard]
//

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });  // { useHash: true }

