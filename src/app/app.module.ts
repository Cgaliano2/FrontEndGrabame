import { BrowserModule } from '@angular/platform-browser';
//modulo HTTP para la api
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
///fecha
import { LOCALE_ID, NgModule } from '@angular/core';
import locales from '@angular/common/locales/es';

import {ReactiveFormsModule} from '@angular/forms';

//rutas
import { APP_ROUTING } from './app.routes';
//componentes
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { SearchDateRangeComponent } from './components/search-date-range/search-date-range.component';
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
import { LoginComponent } from './_auth/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './_directives/alert.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

//interceptor
import { JwInterceptor } from './_helpers/jwt.interceptor';
import { AlertService } from './_Services/alert.service';
registerLocaleData(locales);
@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    NavComponent,
    TrayListComponent,
    TrayComponent,
    SearchDateComponent,
    LoginComponent,
    RegisterComponent,
    UbicacionComponent,
    SearchDateRangeComponent,
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
    NgbModule,
    BsDatepickerModule.forRoot()


  ],
  providers: [
    AlertService,
    {provide: HTTP_INTERCEPTORS, useClass: JwInterceptor, multi: true },
    {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
