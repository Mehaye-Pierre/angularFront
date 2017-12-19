import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';
import { EnsureAuthenticated } from '../services/ensure-authenticated.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  isLoggedIn;
  subscription: any;

  constructor(
    private router: Router,
    private auth: AuthService,
    private ens: EnsureAuthenticated,
    private location: Location) {}

  url: string = this.location.path();

  ngOnInit(): void {
    this.subscription = this.ens.connected.subscribe(status => {
      this.isLoggedIn = status;
    });
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn =  true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
