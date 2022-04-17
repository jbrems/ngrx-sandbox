import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss']
})
export class ToppingsComponent implements OnInit {
  @ViewChild('input') input?: ElementRef;

  toppings: string[];

  constructor() {
    this.toppings = ['Cheese', 'Onions'];
  }

  ngOnInit(): void {
  }

  addTopping(): void {
    const newTopping = this.input?.nativeElement.value;
    this.toppings = [...this.toppings, newTopping];
  }

}
