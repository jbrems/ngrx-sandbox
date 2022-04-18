import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Pizza } from './pizza';
import { MatChipInputEvent } from '@angular/material/chips';
import { Store } from '@ngrx/store';
import { map, startWith, withLatestFrom } from 'rxjs/operators';
import { addPizza } from './pizza.actions';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizzas$: Observable<Pizza[]>
  toppings$: Observable<string[]>;

  newPizzaForm: FormGroup;

  @ViewChild('toppingInput') toppingInput?: ElementRef<HTMLInputElement>;
  toppingControl = new FormControl('');
  filteredToppings$: Observable<string[]>;
  toppings: string[] = [];

  isAddingNewPizza = false;

  constructor(private store: Store<{ pizza: { pizzas: Pizza[], toppings: string[] } }>) {
    this.pizzas$ = this.store.select('pizza').pipe(map(state => state.pizzas));
    this.toppings$ = this.store.select('pizza').pipe(map(state => state.toppings));
  
    this.newPizzaForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(0.00),
    });

    this.filteredToppings$ = this.toppingControl.valueChanges.pipe(
      startWith(''),
      withLatestFrom(this.toppings$),
      map(([filterValue, toppings]) => toppings.filter((topping: string) => topping.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))),
    );
  }

  ngOnInit(): void {

  }

  addPizza(): void {
    if (this.isAddingNewPizza) {
      this.store.dispatch(addPizza({...this.newPizzaForm.value, toppings: this.toppings}));
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

  selectTopping(event: MatAutocompleteSelectedEvent): void {
    this.toppings.push(event.option.viewValue);
    if (this.toppingInput) this.toppingInput.nativeElement.value = '';
    this.toppingControl.setValue('');
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter(t => t !== topping);
  }
}
