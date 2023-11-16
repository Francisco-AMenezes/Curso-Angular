import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  testText = 'RADDA RADDA TESTE'

  today = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
