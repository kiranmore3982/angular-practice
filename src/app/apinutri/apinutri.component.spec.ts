import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinutriComponent } from './apinutri.component';

describe('ApinutriComponent', () => {
  let component: ApinutriComponent;
  let fixture: ComponentFixture<ApinutriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApinutriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
