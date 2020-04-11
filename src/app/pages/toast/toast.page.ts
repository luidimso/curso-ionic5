import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toast: ToastController) { }

  ngOnInit() {
  }

  async presentToast(){
    const toast = await this.toast.create({
      header: "Title",
      message: "Text",
      duration: 2000,
      position: "top",
      color: "danger",
      buttons: [
        {
          side: "start",
          icon: "star",
          text: "Test 1",
          handler: () => {

          }
        },{
          text: "Cancel",
          role: "cancel",
          handler: () => {

          }
        }
      ]
    });
    toast.present();
  }
}
