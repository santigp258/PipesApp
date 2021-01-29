import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  nameLower: string = 'santiago';
  nameUpper: string = 'SANTIAGO';
  nameComplete: string = 'Santiago';
}
