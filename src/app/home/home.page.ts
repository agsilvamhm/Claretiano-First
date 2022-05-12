import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionControl: ActionSheetController) {}

  async mostrarComponente(){
  const actionControl = await this.actionControl.create({
    header: 'Opções',
    cssClass: 'my-custom-class',
    buttons:[{
      text: 'Delete',
      role: 'Destrutive',
      handler: () =>{
        console.log('O botão delete foi clicado!');
      }
    }]
  });
  await actionControl.present();
}

}
