import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchannelviewComponent } from './userchannelview.component';

describe('UserchannelviewComponent', () => {
  let component: UserchannelviewComponent;
  let fixture: ComponentFixture<UserchannelviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserchannelviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserchannelviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
