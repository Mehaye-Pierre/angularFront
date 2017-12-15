import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { Client } from '../models/client';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit, AfterViewInit {

  message = 'Comment vous voyez ça?';

  constructor(private router: Router, private auth: AuthService,
              private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    localStorage.removeItem('token');
    this.shoppingCartService.empty();
    this.message = 'Vous etes deconnecte, retour a l\'accueil';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 3000);
    }
}
