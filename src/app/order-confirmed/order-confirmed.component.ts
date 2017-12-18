import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit {

  public constructor(private auth: AuthService,
    private router: Router,
    private shoppingCartService: ShoppingCartService) { }
  message = 'Oops';


  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.ensureAuthenticated(token).then(user => {
        console.log(user);
        if (user.status === 'success') {
          this.message = 'Votre commande a bien été prise en compte et vous sera envoyée dans les plus bref delais !';
          this.emptyCart();

        }else {
          this.router.navigate(['']);
        }
      }).catch(err => console.log(err));
    }else {
      this.router.navigate(['']);
    }
  }
}
