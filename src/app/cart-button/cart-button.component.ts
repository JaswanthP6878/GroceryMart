import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent {
  count: number = 0;

  add(): void {
    this.count++;
  }
  subract(): void {
    this.count--;
  }

}
