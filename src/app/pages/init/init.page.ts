import { Component, OnInit } from '@angular/core';
import { Components } from 'src/app/model/component';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {

  list:Observable<Components[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.list = this.dataService.getMenu();
  }

}
