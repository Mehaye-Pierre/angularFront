import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClientDataService } from './../services/clientData.service';
import { AuthService } from '../services/auth.service';
import { DeliveryComponent } from './delivery.component';
import { HttpModule } from '@angular/http';

describe('DeliveryComponent', () => {
  let component: DeliveryComponent;
  let fixture: ComponentFixture<DeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [ DeliveryComponent ],
      providers: [ClientDataService, AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
