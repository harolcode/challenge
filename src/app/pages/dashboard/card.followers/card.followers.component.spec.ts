import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFollowersComponent } from './card.followers.component';

describe('CardFollowersComponent', () => {
  let component: CardFollowersComponent;
  let fixture: ComponentFixture<CardFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFollowersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
