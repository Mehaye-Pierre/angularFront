import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit {

  public constructor(private auth: AuthService, private router: Router) { }
  message = 'Oops';
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.ensureAuthenticated(token).then(user => {
        console.log(user);
        if (user.status === 'success') {
          this.message = 'Votre commande a bien été prise en compte et vous sera envoyée dans les plus bref delais !';
        }else {
          this.router.navigate(['']);
        }
      }).catch(err => console.log(err));
    }else {
      this.router.navigate(['']);
    }
  }
}
