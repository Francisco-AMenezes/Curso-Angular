import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/Games';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games: Games[] = [
    { plataform: "Ps5", bgame: "Tomb Raider" },
    { plataform: "Xbox S/X", bgame: "Halo" },
    { plataform: "Nintendo Switch", bgame: "Mário kart" },
    { plataform: "PC", bgame: "League of Legends (LOL)" },
  ];

  gaming = true
  bg ='none'
  underline ='underline'
  bestSeller = ''
  

  constructor() { }

  ngOnInit(): void {
  }

  showGame(games: Games){
    this.bestSeller = `O jogo mais jogado da plataforma é: ${games.bgame}`,
    this.gaming = true 
  }

  hideGame(){
    this.gaming = false
  }
}
