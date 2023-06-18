import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupassisComponent } from './groupassis.component';

describe('GroupassisComponent', () => {
  let component: GroupassisComponent;
  let fixture: ComponentFixture<GroupassisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupassisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupassisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
