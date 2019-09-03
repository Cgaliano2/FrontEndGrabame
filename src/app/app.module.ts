import { BrowserModule } from '@angular/platform-browser';
//fecha
import { LOCALE_ID, NgModule } from '@angular/core';
import locales from '@angular/common/locales/es';


//modulo HTTP para la api
import { HttpClientModule} from '@angular/common/http';
//rutas
import { APP_ROUTING } from './app.routes';
//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { TrayListComponent } from './components/tray-list/tray-list.component';
import { SearchImageComponent } from './components/search-tray/search-tray.component';
import { TrayComponent } from './components/tray/tray.component';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//materiales
import { MaterialModule} from './material/material.module';


registerLocaleData(locales);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TrayListComponent,
    SearchImageComponent,
    TrayComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
