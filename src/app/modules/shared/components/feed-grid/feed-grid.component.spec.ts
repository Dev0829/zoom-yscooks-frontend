import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedGridComponent } from './feed-grid.component';

describe('FeedGridComponent', () => {
  let component: FeedGridComponent;
  let fixture: ComponentFixture<FeedGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
