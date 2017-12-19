import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  constructor(private location: Location) { }

  public userSurname: string;
  public userName: string;
  public cityName: string;
  public name: string;
  public streetNumber: string;
  public streetName: string;



  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  add() {
    this.location.back();
  }

}
