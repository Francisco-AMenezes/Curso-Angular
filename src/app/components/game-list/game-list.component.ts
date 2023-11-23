import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/Games';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games: Games[] = [];

  gaming = true;
  bg = 'none';
  underline = 'underline';
  bestSeller = '';
  color = 'white';

  constructor(private gameListService: GameListService) {
    this.getGames();
  }

  ngOnInit(): void {}

  showGame(games: Games) {
    (this.bestSeller = `O jogo mais jogado da plataforma é: ${games.bgame}`),
      (this.gaming = true);
  }

  hideGame() {
    this.gaming = false;
  }

  getGames(): void{
    this.gameListService.getAll().subscribe((game) => {
      console.log("Lista de games", game)
      this.games = game
    })
  }
}
