import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {

  isLoggedIn = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.auth.ensureAuthenticated(token).then(user => {
        console.log(user);
        if (user.status === 'success') {
          this.isLoggedIn = true;
        }
      }).catch(err => console.log(err));
    }
  }
}
