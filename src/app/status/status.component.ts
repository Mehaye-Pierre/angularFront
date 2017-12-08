import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit, AfterViewInit {

  isLoggedIn = false;
  message = 'Comment vous voyez ça?';

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.auth.ensureAuthenticated(token).then(user => {
        console.log(user);
        if (user.status === 'success') {
          this.isLoggedIn = true;
          this.message = 'Vous etes connecte, retour a l\'accueil.';
        }
      }).catch(err => console.log(err));
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 3000);
    }
}
