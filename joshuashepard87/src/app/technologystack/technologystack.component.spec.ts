import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologystackComponent } from './technologystack.component';

describe('TechnologystackComponent', () => {
  let component: TechnologystackComponent;
  let fixture: ComponentFixture<TechnologystackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologystackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologystackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
