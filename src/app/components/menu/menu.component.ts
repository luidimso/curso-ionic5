import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Components } from 'src/app/model/component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  list:Observable<Components[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.list = this.dataService.getMenu();
  }
}
