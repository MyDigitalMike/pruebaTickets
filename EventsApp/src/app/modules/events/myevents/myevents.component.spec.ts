import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyeventsComponent } from './myevents.component';

describe('MyeventsComponent', () => {
  let component: MyeventsComponent;
  let fixture: ComponentFixture<MyeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyeventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});