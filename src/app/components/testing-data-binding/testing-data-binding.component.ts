import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-data-binding',
  templateUrl: './testing-data-binding.component.html',
  styleUrls: ['./testing-data-binding.component.scss'],
})
export class TestingDataBindingComponent implements OnInit {
  phoneNumber: any

  constructor() {}

  ngOnInit(): void {}
}
