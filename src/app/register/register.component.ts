import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  user: Client = new Client();

  constructor(private router: Router, private auth: AuthService) {}

  onRegister(): void {
    // this.auth.register(this.user).then((data: any) => console.log(data)).catch(err => console.log(err));
    this.auth.register(this.user).then(user => {
      localStorage.setItem('token', user.auth_token);
      this.router.navigateByUrl('/status');
    }).catch(err => console.log(err));
  }
}
