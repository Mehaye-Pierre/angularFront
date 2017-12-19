import { EnsureAuthenticated } from './../services/ensure-authenticated.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(
    private router: Router,
    private auth: AuthService,
    private ens: EnsureAuthenticated,
    private route: ActivatedRoute) {}

  user: Client = new Client();
  url: string = this.route.snapshot.queryParams['returnUrl'];

  onLogin(): void {
    let test = true;
    if (!this.user.login) {
      console.log('login vide');
      test = false;
    }
    if (!this.user.password) {
      console.log('password vide');
      test = false;
    }
    if (test) {
      this.auth.login(this.user).then(user => {
        localStorage.setItem('token', user.auth_token);
        this.router.navigate(['/status'], { queryParams: { returnUrl: this.url }});
        this.ens.changeState(true);
      }).catch(err => console.log(err));
    }
  }
}
