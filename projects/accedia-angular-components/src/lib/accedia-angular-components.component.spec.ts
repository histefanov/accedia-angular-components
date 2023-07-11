import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccediaAngularComponentsComponent } from './accedia-angular-components.component';

describe('AccediaAngularComponentsComponent', () => {
  let component: AccediaAngularComponentsComponent;
  let fixture: ComponentFixture<AccediaAngularComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccediaAngularComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccediaAngularComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
