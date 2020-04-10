import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.page.html',
  styleUrls: ['./dates.page.scss'],
})
export class DatesPage implements OnInit {

  todayDate:Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  changeDate(newDate:any){
    alert(newDate.detail.value);
  }

}
