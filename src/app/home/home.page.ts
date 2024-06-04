import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  dadosAgenda = [
    {
      texto: 'Prova de matemática',
      data: '2025-02-08',
      ativo: true,
    },
    {
      texto: 'Treino de Fuyebol',
      data: '2025-03-22',
      ativo: false,
    },
  ];

  ativarCompromisso(index: any) {
    let mensagem = 'Compromisso "' + this.dadosAgenda[index].texto;

    if (this.dadosAgenda[index].ativo == true) {
      mensagem = mensagem + ' "ativo';
    } else {
      mensagem = mensagem + ' "foi desativado,;';

      this.toastCtrl
        .create({
          message: mensagem,
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
        });
    }
  }

  mudarStatus(value: boolean) {
    this.dadosAgenda.forEach((item) => {
      item.ativo = value;
    });
  }

  public adicionar = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  async apagar() {
    const alert = await this.alertCtrl.create({
      header: 'Opa!',
      subHeader: '',
      message: 'Realmente deseja apagar todos',
      buttons: ['Não','Sim'],
    });

    await alert.present();
  }
}
