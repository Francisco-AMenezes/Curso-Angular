import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = "Francisco"

  userData ={
    email: 'franciscoalvesmenezes90@gmail.com',
    role: 'desenvolvedor'
  }
  
  title = 'curso-angular';
}
