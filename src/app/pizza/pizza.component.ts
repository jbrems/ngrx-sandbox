import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Pizza } from './pizza';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizzas$: Observable<Pizza[]>

  newPizzaForm: FormGroup;
  toppings: string[] = [];

  isAddingNewPizza = false;

  constructor() {
    this.pizzas$ = of([{ name: 'Test pizza', toppings: ['cheese', 'bacon', 'onion'], description: 'Dummy pizza for testing', price: 10.40 }]);
  
    this.newPizzaForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      toppings: new FormControl([]),
      price: new FormControl(0.00),
    });
  }

  ngOnInit(): void {

  }

  addPizza(): void {
    if (this.isAddingNewPizza) {
      this.newPizzaForm.reset();
    }

    this.isAddingNewPizza = !this.isAddingNewPizza;
  }

  addTopping(event: MatChipInputEvent): void {
    if (event.value) {
      this.toppings.push(event.value);
      event.chipInput!.clear();
    }
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter(t => t !== topping);
  }
}
