import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  steps: number = 1;
  
  changeStep(number: number){
    this.steps = number
  }
}
