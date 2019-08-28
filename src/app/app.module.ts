import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modulo HTTP para la api
import { HttpClientModule} from '@angular/common/http';
//modulo Lightbox
import { LightboxModule } from 'ngx-lightbox';


//rutas
import { APP_ROUTING } from './app.routes';
//servicios

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { TrayListComponent } from './components/tray-list/tray-list.component';
import { SearchImageComponent } from './components/search-image/search-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TrayListComponent,
    SearchImageComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
