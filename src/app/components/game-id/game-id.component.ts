import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameListService } from 'src/app/services/game-list.service';

import { Games } from 'src/app/Games';

@Component({
  selector: 'app-game-id',
  templateUrl: './game-id.component.html',
  styleUrls: ['./game-id.component.scss'],
})
export class GameIdComponent implements OnInit {
  game?: Games;

  constructor(
    private gameListService: GameListService,
    private route: ActivatedRoute
  ) {
    this.getGame();
  }

  ngOnInit(): void {}

  getGame(): void {
    alert('Abrindo busca por id');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameListService.getItem(id).subscribe((game) => (this.game = game));
    console.log('games', this.game);
  }
}
