import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {

  list:Components[] = [
    {
      icon: "alert-circle",
      nome: "Alert",
      link: "/alert"
    },{
      icon: "tablet-landscape",
      nome: "Tabs",
      link: "/action-sheet"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Components{
  icon:string,
  nome:string,
  link:string
}
