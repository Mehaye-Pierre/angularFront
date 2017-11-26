import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailledArticleComponent } from './detailled-article.component';

describe('DetailledArticleComponent', () => {
  let component: DetailledArticleComponent;
  let fixture: ComponentFixture<DetailledArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailledArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailledArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
