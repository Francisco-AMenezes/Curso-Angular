import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { Games } from 'src/app/Games';


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})

export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: "Silvão", type: "cachorro", age: 1 },
    { name: "Amélia", type: 'cachorro ', age: 6 },
    { name: 'Maddona', type: 'cachorro', age: 9 },
    { name: 'Jade', type: 'El Gaton', age: 1 },
    { name: 'Loki', type: 'El Gatito', age: 0.5 },
  ];

  animal: Animal = {
    name: 'placeholder',
    type: 'placeholder',
    age: 1
  };

  underline = 'underline'
  bg = 'none'
  showA = true
  gaming = true

  games: Games[] = [
    { plataform: "Ps5", bgame: "Tomb Raider" },
    { plataform: "Xbox S/X", bgame: "Halo" },
    { plataform: "Nintendo Switch", bgame: "Mário kart" },
    { plataform: "PC", bgame: "League of Legends (LOL)" },
  ];

  animalDetails = '';
  bestSeller = ''


  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`,
    this.showA = true
  }

  showGame(game:Games): void{
    this.bestSeller = `O jogo mais vendido dessa plataforma é: ${game.bgame}`,
    this.gaming = true
  }

  hideDetails(): void {
    this.showA = false,
    this.gaming = false;
  }

  
}