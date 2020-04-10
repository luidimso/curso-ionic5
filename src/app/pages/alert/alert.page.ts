import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  title:string;

  constructor(public alert: AlertController) { }

  async presentAlert(){
    const alert = await this.alert.create({
      header: "Title",
      subHeader: "SubTitle",
      message: "Text",
      inputs: [
        {
          name: 'test1',
          type: 'text',
          placeholder: 'Test 1'
        },
        {
          id: 'test2',
          name: 'test2',
          type: 'number',
          value: '123'
        }
      ],
      buttons: ['OK',{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'red',
        handler: () => {

        }
      },{
        text: 'Save',
        handler: (data) => {
          this.title = data.test1;
        }
      }]
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
