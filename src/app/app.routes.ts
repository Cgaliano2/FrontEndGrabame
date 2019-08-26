import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrayListComponent } from './components/tray-list/tray-list.component';
import { TraySearchComponent } from './components/tray-search/tray-search.component';





const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path: 'tray-list', component: TrayListComponent },
    {path: 'buscar/:id', component: TraySearchComponent },
    {path: '**', pathMatch: 'full' , redirectTo: 'home'}

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,  { useHash: true });

