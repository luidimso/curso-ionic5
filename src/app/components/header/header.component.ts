import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title:string;

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  toggleMenu(){
    this.menu.toggle();
  }
}
