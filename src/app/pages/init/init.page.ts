import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.page.html',
  styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {

  list:Components[] = [
    {
      icone: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6b11248-e12c-454b-a407-7904b3a597ad/daz17e1-0994da81-c20d-490f-93c3-51dd40b20039.png/v1/fill/w_256,h_256,strp/wwe_john_cena_rise_above_hate_icon_by_rkb7_daz17e1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvYjZiMTEyNDgtZTEyYy00NTRiLWE0MDctNzkwNGIzYTU5N2FkXC9kYXoxN2UxLTA5OTRkYTgxLWMyMGQtNDkwZi05M2MzLTUxZGQ0MGIyMDAzOS5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.6mHBLew16qlDY0teVZaIqSbQzGljnyGYH6zB1tTXBwI",
      nome: "John Cena",
      link: "/action-sheet"
    },{
      icone: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b6b11248-e12c-454b-a407-7904b3a597ad/daz17ez-7b0b46ae-7234-4ff4-ab7f-db3ff152b88e.png/v1/fill/w_256,h_256,strp/wwe_the_rock_icon_by_rkb7_daz17ez-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjU2IiwicGF0aCI6IlwvZlwvYjZiMTEyNDgtZTEyYy00NTRiLWE0MDctNzkwNGIzYTU5N2FkXC9kYXoxN2V6LTdiMGI0NmFlLTcyMzQtNGZmNC1hYjdmLWRiM2ZmMTUyYjg4ZS5wbmciLCJ3aWR0aCI6Ijw9MjU2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fyRk3n7AWj1TCanfUAA8TgNumU33kNuBLNBGzGIIiPk",
      nome: "The Rock",
      link: "/action-sheet"
    },{
      icone: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCd5slH8DnvW1d_uSZnfoUGYE_u2pYWgC4xyaY3wb6L-wdDAXs&usqp=CAU",
      nome: "CM Punk",
      link: "/action-sheet"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Components{
  icone:string,
  nome:string,
  link:string
}
