import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private _alertCtrl: AlertController) {
    this._alertCtrl.create({message : 'Desenvolvendo'}).present();
  }

}
