import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component';
import { ToppingsComponent } from './pizza/toppings/toppings.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pizzas', component: PizzaComponent },
  { path: 'toppings', component: ToppingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
