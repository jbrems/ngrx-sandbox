import { createAction, props } from "@ngrx/store";

export const setUser = createAction('Set user', props<{ username: string }>());
export const unsetUser = createAction('Unset user');