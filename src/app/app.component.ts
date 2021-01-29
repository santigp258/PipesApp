import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = 'santiago';
  value: number = 2000;
  obj ={
    name: this.name,
    value: this.value
  }

  showName(){
    console.log(this.name);
  }
}
