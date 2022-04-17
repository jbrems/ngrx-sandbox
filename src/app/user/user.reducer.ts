import { createReducer, on } from "@ngrx/store";
import { User } from "./user";
import { setUser, unsetUser } from './user.actions';

export const initialState: User = { loggedIn: true, username: 'Jonas' };

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, { username }) => ({ loggedIn: true, username })),
  on(unsetUser, state => ({ loggedIn: false })),
);