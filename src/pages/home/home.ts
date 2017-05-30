import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { OfertaPage } from '../oferta/oferta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public ofertas;

  constructor(
    public navCtrl: NavController, 
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) {}

    ngOnInit(){
      let loader = this._loadingCtrl.create({
        content: 'Buscando doações...'
      });
      
      loader.present();

      this._http
        .get('https://trabalho-mobile-server-barbaromatrix.c9users.io/doacao')
        .map(res => res.json())
        .toPromise()
        .then(ofertas => {
          this.ofertas = ofertas;
          loader.dismiss();
        })
        .catch(err => {
          console.log(err);
          loader.dismiss();
          this._alertCtrl
            .create({
              title: 'Falha na conexão',
              buttons: [{ text: 'Estou ciente!'}],
              subTitle: 'Não foi possível obter a lista de ofertas. Verifique sua rede :('
            }).present();
        });
    }

    selecionaOferta(doacao) {
      this.navCtrl.push(OfertaPage, { ofertaSelecionada: doacao } );
    }
}
