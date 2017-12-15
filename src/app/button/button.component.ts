import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  isLoggedIn;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn =  true;
      console.log('true');
    } else {
      this.isLoggedIn = false;
      console.log('false');
    }
  }
}
