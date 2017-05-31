import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage implements OnInit {

  public categoriasProduto;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _alertCtrl: AlertController, private _http : Http) {
    
  }

  ngOnInit(){
    this._http
    .get('https://trabalho-mobile-server-barbaromatrix.c9users.io/tipoProduto')
        .map(res => res.json())
        .toPromise()
        .then(categoriaProduto => {
          this.categoriasProduto = categoriaProduto;
        })
        .catch(err => {
          console.log(err);
        });
  }

}
