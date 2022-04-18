import { createAction, props } from "@ngrx/store";
import { Pizza } from "./pizza";

export const addPizza = createAction('Add pizza', props<Pizza>());
export const addTopping = createAction('Add topping', props<{ topping: string }>());