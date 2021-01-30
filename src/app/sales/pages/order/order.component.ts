import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  boolean: boolean = true;

  change(){
   // (this.boolean) ? this.boolean = false : this.boolean = true
    this.boolean = !this.boolean
  }
  constructor() { }

  ngOnInit(): void {
  }

}
