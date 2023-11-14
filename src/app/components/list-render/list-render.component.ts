import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: "Silvão", type: "cachorro"},
    {name: "Amélia", type: 'cachorro '},
    {name: 'Maddona', type: 'cachorro'},
    {name: 'Jade', type: 'El Gaton'},
    {name: 'Loki', type: 'El Gatito'},
  ]

  games = [
    {plataform: "Ps5", bgame: "Tomb Raider"},
    {plataform: "Xbox S/X", bgame: "Halo"},
    {plataform: "Nintendo Switch", bgame: "Mário kart"},
    {plataform: "PC", bgame:"League of Legends (LOL)"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
