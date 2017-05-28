import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'oferta.html'
})
export class OfertaPage {
    
    public oferta;

    constructor(public navParams: NavParams) {
        this.oferta = this.navParams.get('ofertaSelecionada');
        
   }
}