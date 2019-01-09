import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import * as Tesseract from 'tesseract.js';

@IonicPage()
@Component({
  selector: 'page-analise-foto',
  templateUrl: 'analise-foto.html',
})
export class AnaliseFotoPage {

  foto: any;
  dadosFoto: any;
  textImage:any;

  constructor(private loading: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
    this.foto = this.navParams.get('foto');
    this.analisar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnaliseFotoPage');
  }

  ajusteTextArea(event){
    let textArea:any = event.target;
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight+'px';
    return;
  }

  analisar() {
    let loadingCtrl = this.loading.create({
      spinner: 'ios'
    });
    loadingCtrl.present();
    Tesseract.recognize(this.foto)
      .catch(err => {
        console.error(err);
        loadingCtrl.dismiss();
      })
      .then(result => {
        console.log(result);
        this.dadosFoto = result;
        this.textImage = result.text;
        loadingCtrl.dismiss();
      });

  }

}
