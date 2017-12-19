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

  constructor(private router: Router, private auth: AuthService, private ens: EnsureAuthenticated) {}

  onRegister(): void {
    this.auth.register(this.user).then(user => {
      localStorage.setItem('token', user.auth_token);
      this.router.navigateByUrl('/status');
      this.ens.changeState(true);
    }).catch(err => console.log(err));
  }
}
