import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tomb = [1, 2, 3, 4, 5, 6, 7];

  constructor() {
    console.log(this.tomb.map(  (param: number) => param * 2));
    console.log(this.tomb.reduce((x,y) => x + y));

  }
}
