import { EnsureAuthenticated } from './../services/ensure-authenticated.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  user: Client = new Client();

  constructor(private router: Router, private auth: AuthService, private ens: EnsureAuthenticated) {}

  onLogin(): void {
    // this.auth.login(this.user).then((data: any) => console.log(data)).catch(err => console.log(err));
    this.auth.login(this.user).then(user => {
      localStorage.setItem('token', user.auth_token);
      this.router.navigateByUrl('/status');
      this.ens.changeState(true);
    }).catch(err => console.log(err));

  }
}
