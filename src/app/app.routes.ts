import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrayListComponent } from './components/tray-list/tray-list.component';




const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'tray-list', component: TrayListComponent },
    { path: '**', pathMatch: 'full' , redirectTo: 'home'}

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,  { useHash: true });

