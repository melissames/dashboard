import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansFilterComponent } from './plans-filter.component';

describe('PlansFilterComponent', () => {
  let component: PlansFilterComponent;
  let fixture: ComponentFixture<PlansFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
