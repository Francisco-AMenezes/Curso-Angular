import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

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

  constructor(private listService: ListService) {
    this.getAnimals();
  }

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
      (this.animals = this.listService.remove(this.animals, animal));
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
