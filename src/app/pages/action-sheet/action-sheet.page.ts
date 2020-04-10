import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public actionSheet: ActionSheetController) { }

  async presentActionSheet(){
    const actionSheet = await this.actionSheet.create({
      header: 'Test',
      backdropDismiss: false,
      buttons: [{
        text: 'Test 1',
        role: 'destructive',
        icon: 'trash',
        handler: () => {

        }
      },{
        text: 'Test 2',
        icon: 'share',
        handler: () => {

        }
      },{
        text: 'Test 3',
        icon: 'close',
        role: 'cancel',
        cssClass: 'red',
        handler: () => {

        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
  }

}
