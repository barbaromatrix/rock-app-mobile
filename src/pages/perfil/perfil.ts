import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _http : Http) {
  }

  ionViewDidLoad() {
    this._http.get('https://trabalho-mobile-server-barbaromatrix.c9users.io/usuario/3');
  }

}
