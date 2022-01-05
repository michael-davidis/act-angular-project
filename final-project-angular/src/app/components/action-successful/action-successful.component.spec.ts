import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSuccessfulComponent } from './action-successful.component';

describe('ActionSuccessfulComponent', () => {
  let component: ActionSuccessfulComponent;
  let fixture: ComponentFixture<ActionSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
