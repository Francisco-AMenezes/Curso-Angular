import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.scss']
})
export class EmiterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(){
    console.log("deu bom!")
  }

}
