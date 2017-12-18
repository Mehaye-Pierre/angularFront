import { ClientDataService } from './../services/clientData.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Address } from '../models/address.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  public addresses: Observable<Address[]>;

  public constructor(private clientDataService: ClientDataService,
    private auth: AuthService,
    private router: Router) { }

 public ngOnInit(): void {
  const token = localStorage.getItem('token');
      if (token) {
        this.auth.ensureAuthenticated(token).then(user => {
          console.log(user);
          if (user.status === 'success') {
            this.addresses = this.clientDataService.getAddress();
          }else {
            this.router.navigate(['/login']);
          }
        }).catch(err => console.log(err));
      }else {
        this.router.navigate(['/login']);
      }
    }

}
