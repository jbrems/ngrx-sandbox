import { createReducer, on } from "@ngrx/store";
import { addPizza, addTopping } from "./pizza.actions";

export const initialState = {
  pizzas: [{ name: 'Margherita', description: 'The most basic of basic pizzas', toppings: ['Cheese'], price: 8.20 }],
  toppings: ['Cheese', 'Onion', 'Bacon'],
};

export const pizzaReducer = createReducer(
  initialState,
  on(addPizza, (state, pizza) => ({ ...state, pizzas: [...state.pizzas, pizza] })),
  on(addTopping, (state, { topping }) => ({ ...state, toppings: [...state.toppings, topping] })),
);