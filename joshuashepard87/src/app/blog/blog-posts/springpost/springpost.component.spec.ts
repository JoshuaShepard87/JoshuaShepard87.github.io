import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringpostComponent } from './springpost.component';

describe('SpringpostComponent', () => {
  let component: SpringpostComponent;
  let fixture: ComponentFixture<SpringpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
