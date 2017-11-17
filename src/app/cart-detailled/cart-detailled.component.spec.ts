import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailledComponent } from './cart-detailled.component';

describe('CartDetailledComponent', () => {
  let component: CartDetailledComponent;
  let fixture: ComponentFixture<CartDetailledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDetailledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDetailledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
