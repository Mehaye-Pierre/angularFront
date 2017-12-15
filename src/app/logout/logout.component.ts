import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';
import { EnsureAuthenticated } from '../services/ensure-authenticated.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit, AfterViewInit {

  message = 'Comment vous voyez �a?';

  constructor(private router: Router, private auth: AuthService,
              private shoppingCartService: ShoppingCartService, private ens: EnsureAuthenticated) {}

  ngOnInit(): void {
    localStorage.removeItem('token');
    this.shoppingCartService.empty();
    this.message = 'Vous etes deconnecte, retour a l\'accueil';
    this.ens.changeState(false);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 3000);
    }
}
