import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Silvão', type: 'cachorro', age: 1 },
    { name: 'Amélia', type: 'cachorro ', age: 6 },
    { name: 'Maddona', type: 'cachorro', age: 9 },
    { name: 'Jade', type: 'El Gaton', age: 1 },
    { name: 'Loki', type: 'El Gatito', age: 0.5 },
  ];

  animal: Animal = {
    name: 'placeholder',
    type: 'placeholder',
    age: 1,
  };

  underline = 'underline';
  bg = 'none';
  showA = true;

  animalDetails = '';
  bestSeller = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    (this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`),
      (this.showA = true);
  }

  hideDetails(): void {
    this.showA = false;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...'),
    this.animals = this.listService.remove(this.animals, animal);
  }
}
