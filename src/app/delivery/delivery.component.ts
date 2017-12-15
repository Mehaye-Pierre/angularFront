import { ClientDataService } from './../services/clientData.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Address } from '../models/address.model';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  public addresses: Observable<Address[]>;

  public constructor(private clientDataService: ClientDataService) { }

 public ngOnInit(): void {
      this.addresses = this.clientDataService.getAddress();
    }

}
