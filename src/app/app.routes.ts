import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrayListComponent } from './components/tray-list/tray-list.component';
import { SearchImageComponent} from './components/search-tray/search-tray.component';
import { TrayComponent } from './components/tray/tray.component';
import {SearchDateComponent} from './components/search-date/search-date.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';












const APP_ROUTES: Routes = [
    {path: '', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'tray-list', component: TrayListComponent},
    {path: 'Buscar-Bandeja/:termino', component: SearchImageComponent},
    {path: 'tray/:id', component: TrayComponent},
    {path: 'search-date/:term', component:SearchDateComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', pathMatch: 'full' , redirectTo: 'login'}

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,  { useHash: true });

