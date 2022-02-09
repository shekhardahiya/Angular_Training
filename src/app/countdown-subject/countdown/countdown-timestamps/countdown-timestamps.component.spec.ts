import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimestampsComponent } from './countdown-timestamps.component';

describe('CountdownTimestampsComponent', () => {
  let component: CountdownTimestampsComponent;
  let fixture: ComponentFixture<CountdownTimestampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimestampsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimestampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
