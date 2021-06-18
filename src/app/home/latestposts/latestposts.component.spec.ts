import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestpostsComponent } from './latestposts.component';

describe('LatestpostsComponent', () => {
  let component: LatestpostsComponent;
  let fixture: ComponentFixture<LatestpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
