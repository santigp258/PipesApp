import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  boolean: boolean = true;
  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      fly: true,
      color: Color.black,
    },
    {
      name: 'Robby',
      fly: false,
      color: Color.green,
    },
    {
      name: 'DareDevil',
      fly: false,
      color: Color.red,
    },
    {
      name: 'Green Lantern',
      fly: true,
      color: Color.green,
    },
  ];
  change() {
    // (this.boolean) ? this.boolean = false : this.boolean = true
    this.boolean = !this.boolean;
  }
}
