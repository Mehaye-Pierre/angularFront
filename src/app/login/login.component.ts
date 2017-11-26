import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  test = 'just a test';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const clientTest = {
      login: 'bob',
      password: 'test'
    };

    this.auth.register(clientTest);

    const status = this.auth.login(clientTest);
  }
}
