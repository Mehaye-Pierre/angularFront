import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';
import { EnsureAuthenticated } from '../services/ensure-authenticated.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  user: Client = new Client();
  password: string;

  constructor(private router: Router, private auth: AuthService, private ens: EnsureAuthenticated) {}

  onRegister(): void {
    let test = true;
    if (!this.user.login) {
      console.log('login vide');
      test = false;
    }
    if (!this.user.password || !this.password) {
      if (!this.user.password) {
        console.log('password vide');
      }
      if (!this.password) {
        console.log('password2 vide');
      }
      test = false;
    } else if (this.user.password !== this.password) {
      console.log('password differents');
      test = false;
    }
    if (!this.user.mail) {
      console.log('mail vide');
      test = false;
    }
    if (test) {
      this.auth.register(this.user).then(user => {
        localStorage.setItem('token', user.auth_token);
        this.router.navigateByUrl('/status');
        this.ens.changeState(true);
      }).catch(err => console.log(err));
    }
  }
}
