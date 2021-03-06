import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OfertaPage } from '../pages/oferta/oferta';
import { ProdutoPage } from '../pages/produto/produto';
import { MapaPage } from '../pages/mapa/mapa';
import { PerfilPage } from '../pages/perfil/perfil';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    OfertaPage,
    ProdutoPage,
    MapaPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OfertaPage,
    ProdutoPage,
    MapaPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
