import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addTopping } from '../pizza.actions';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['./toppings.component.scss']
})
export class ToppingsComponent implements OnInit {
  @ViewChild('input') input?: ElementRef;

  toppings$: Observable<string[]>;

  constructor(private store: Store<{ pizza: { toppings: string[] } }>) {
    this.toppings$ = this.store.select('pizza').pipe(map(state => state.toppings));
  }

  ngOnInit(): void {
  }

  addTopping(): void {
    const newTopping = this.input?.nativeElement.value;
    this.store.dispatch(addTopping({ topping: newTopping }));
  }

}
