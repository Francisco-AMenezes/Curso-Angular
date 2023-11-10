import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Chicão"
  age : number = 18
  job: string = "Dev"
  Isadmin: boolean = true 
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
