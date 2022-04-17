import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../user';
import { setUser } from '../user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('input') input?: ElementRef;

  user$: Observable<User>;

  constructor(private store: Store<{ user: User }>) {
    this.user$ = this.store.select('user');
  }

  ngOnInit(): void {
  }

  changeUser(): void {
    this.store.dispatch(setUser({ username: this.input?.nativeElement.value }));
  }

}
