import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { unsetUser } from '../user/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<User>;

  constructor(private router: Router, private store: Store<{ user: User }>) {
    this.user$ = this.store.select('user');
   }

  ngOnInit(): void {
  }

  changeUser (): void  {
    this.router.navigate(['/login']);
  }
  
  logout (): void {
    this.store.dispatch(unsetUser());
    this.router.navigate(['/login']);
  }
}
