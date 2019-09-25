import { BrowserModule } from '@angular/platform-browser';
//modulo HTTP para la api
import { HttpClientModule} from '@angular/common/http';
///fecha
import { LOCALE_ID, NgModule } from '@angular/core';
import locales from '@angular/common/locales/es';

import {ReactiveFormsModule} from '@angular/forms';

//rutas
import { APP_ROUTING } from './app.routes';
//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { TrayListComponent } from './components/tray-list/tray-list.component';
import { TrayComponent } from './components/tray/tray.component';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//materiales
import { MaterialModule} from './material/material.module';
import { SearchDateComponent } from './components/search-date/search-date.component';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './_directives/alert.component';






registerLocaleData(locales);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TrayListComponent,
    TrayComponent,
    SearchDateComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    VerticalTimelineModule,
    FormsModule,

  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
