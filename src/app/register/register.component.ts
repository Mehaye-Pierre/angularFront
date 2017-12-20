import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  emptyLogin = false;
  emptyPassword1 = false;
  emptyPassword2 = false;
  emptyMail = false;
  differentPasswords = false;

  constructor(private router: Router, private auth: AuthService, private ens: EnsureAuthenticated, private route: ActivatedRoute) {}

  url: string = this.route.snapshot.queryParams['returnUrl'];

  onRegister(): void {
    let test = true;
    this.emptyLogin = false;
    this.emptyPassword1 = false;
    this.emptyPassword2 = false;
    this.emptyMail = false;
    this.differentPasswords = false;
    if (!this.user.login) {
      this.emptyLogin = true;
      test = false;
    }
    if (!this.user.password || !this.password) {
      if (!this.user.password) {
        this.emptyPassword1 = true;
      } else if (!this.password) {
        this.emptyPassword2 = true;
      }
      test = false;
    } else if (this.user.password !== this.password) {
      this.differentPasswords = true;
      test = false;
    }
    if (!this.user.mail) {
      this.emptyMail = true;
      test = false;
    }
    if (test) {
      this.auth.register(this.user).then(user => {
        localStorage.setItem('token', user.auth_token);
        this.router.navigate(['/status'], { queryParams: { returnUrl: this.url }});
        this.ens.changeState(true);
      }).catch(err => console.log(err));
    }
  }
}
