import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinToConferenceComponent } from './join-to-conference.component';

describe('JoinToConferenceComponent', () => {
  let component: JoinToConferenceComponent;
  let fixture: ComponentFixture<JoinToConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinToConferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinToConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
