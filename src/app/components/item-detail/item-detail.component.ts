import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/Games';
import { ActivatedRoute } from '@angular/router';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  game?: Games;

  constructor(
    private gameListService: GameListService,
    private route: ActivatedRoute
  ) {
    this.getGame();
  }

  ngOnInit(): void {}

  getGame() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameListService.getItem(id).subscribe((game) => (this.game = game));
  }
}
