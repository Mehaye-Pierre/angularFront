import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClientDataService } from './../services/clientData.service';
import { AuthService } from '../services/auth.service';
import { BillingComponent } from './billing.component';
import { HttpModule } from '@angular/http';

describe('BillingComponent', () => {
  let component: BillingComponent;
  let fixture: ComponentFixture<BillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [ BillingComponent ],
      providers: [ClientDataService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
