import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class EnsureAuthenticated implements CanActivate {
  connected: Observable<boolean>;
  private observer: Observer<boolean>;

  constructor(private auth: AuthService, private router: Router) {
    this.connected = new Observable( (observer: Observer<boolean>) => {
      this.observer = observer;
    }
  ).share();
  }

  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

  changeState(newState: boolean) {
    if (this.observer !== undefined) {
      this.observer.next(newState);
    }
  }
}
