import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergroupviewComponent } from './usergroupview.component';

describe('UsergroupviewComponent', () => {
  let component: UsergroupviewComponent;
  let fixture: ComponentFixture<UsergroupviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsergroupviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsergroupviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
