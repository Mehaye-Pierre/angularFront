import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

export class LogoutComponent implements OnInit, AfterViewInit, OnDestroy {

  message = 'Comment vous voyez �a?';
  timer;

  constructor(
    private router: Router,
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService,
    private ens: EnsureAuthenticated,
    private route: ActivatedRoute) {}

  url: string = this.route.snapshot.queryParams['returnUrl'];

  ngOnInit(): void {
    localStorage.removeItem('token');
    this.shoppingCartService.empty();
    this.message = 'Vous etes deconnecte, retour en arriere';
    this.ens.changeState(false);
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
