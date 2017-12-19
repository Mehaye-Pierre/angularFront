import { Component, OnInit } from '@angular/core';
import { ClientDataService } from '../services/clientData.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Address } from '../models/address.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public addresses: Observable<Address[]>;
  private cmd= '';

  constructor(private clientDataService: ClientDataService,
    private auth: AuthService,
  private router: Router) { }

    url: string = this.router.routerState.snapshot.url;

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth.ensureAuthenticated(token).then(user => {
        console.log(user);
        if (user.status === 'success') {
          this.addresses = this.clientDataService.getAddress();
        }else {
          this.router.navigate(['/login'], { queryParams: { returnUrl: this.url }});
        }
      }).catch(err => console.log(err));
    }else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: this.url }});
    }
  }

  launchCmd() {
    // TODO
    this.cmd = ' ';
  }

}
