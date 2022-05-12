import { Component } from '@angular/core';
import { ActionSheetController , AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionControl: ActionSheetController,
              public alertControl: AlertController) {}

  async mostrarComponente(){
  const actionControl = await this.actionControl.create({
    header: 'Opções',
    cssClass: 'my-custom-class',
    buttons:[{
      text: 'Delete',
      role: 'Destrutive',
      icon: 'trash',
      id:'delete-button',
      data: {type:'delete'},
      handler: () =>{
        console.log('O botão delete foi clicado!');
      }
    }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () =>{
          console.log('Sared clicado!');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'data value',
        handler: () =>{
          console.log('Play clicado!');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () =>{
          console.log('Favorite clicado!');
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () =>{
          console.log('Cancel clicado!');
        }
      }
    ]
  });
  await actionControl.present();
  const {role, data} = await actionControl.onDidDismiss();
  console.log('OnDidDismiss resolved with role and data', role, data);
}

async apresentarAlert(){
  const alert = await this.alertControl.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Sub Menu',
    message: 'This is an alert messsage',
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
        console.log('Confirm Cancel');
      }
    }, {
      text: 'Ok',
      role: 'ok',
      handler: () => {
        console.log('Confirm ok');
      }
    }]
  });

await alert.present();
const {role} = await alert.onDidDismiss();
console.log('onDidDismiss resolved with role', role);
}
}
