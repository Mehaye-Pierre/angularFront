import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit, AfterViewInit, OnDestroy {

  isLoggedIn = false;
  message = 'Comment vous voyez ça?';
  timer;

  constructor(private router: Router, private auth: AuthService, private route: ActivatedRoute) {}

  url: string = this.route.snapshot.queryParams['returnUrl'];

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {
      this.auth.ensureAuthenticated(token).then(user => {
        console.log(user);
        if (user.status === 'success') {
          this.isLoggedIn = true;
          this.message = 'Vous etes connecte, retour en arriere.';
        }
      }).catch(err => console.log(err));
    }
  }

  ngAfterViewInit() {
    this.timer = setTimeout(() => {
      if (this.url) {
        this.router.navigateByUrl(this.url);
      } else {
        this.router.navigateByUrl('');
      }
    }, 3000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
