import { Component } from '@angular/core';
import { AlertController} from  '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertc: AlertController) {}

  async compra1() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 840 RP <br>Precio: 500$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra2() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 1100 RP <br>Precio: 700$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra3() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 1520 RP <br>Precio: 1100$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra4() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 2250 RP <br>Precio: 1720$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra5() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 3450 RP <br>Precio: 2370$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra6() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 4550 RP <br>Precio: 2810$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra7() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 4970 RP <br>Precio: 3200$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra8() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 5700 RP <br>Precio: 3970$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra9() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 6120 RP <br>Precio: 4360$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra10() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 7200 RP <br>Precio: 5000$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra11() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 8300 RP <br>Precio: 5890$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
  async compra12() {
    const alert = await this.alertc.create({
      header: "Precio de oferta",
      message: "Compra: 9450 RP <br>Precio: 8500$ <br> Ir a compras en el menu de la tienda para realizar la compra.",
      buttons: ['Ok']
    });
    alert.present();
  }
}
