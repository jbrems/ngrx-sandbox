import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pizza } from './pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizzas$: Observable<Pizza[]>

  constructor() {
    this.pizzas$ = of([{ name: 'Test pizza', toppings: ['cheese', 'bacon', 'onion'], description: 'Dummy pizza for testing', price: 10.40 }]);
  }

  ngOnInit(): void {
    
  }
}
