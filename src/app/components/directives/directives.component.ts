import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  color = 'green'
  size = '18'
  font = 'Inter'
  style = 'none'
  colora = 'black'

  classes = ['class' , 'class2']

  constructor() { }

  ngOnInit(): void {
  }

}
