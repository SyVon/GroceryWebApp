import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDetailComponent } from './no-detail.component';

describe('NoDetailComponent', () => {
  let component: NoDetailComponent;
  let fixture: ComponentFixture<NoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
