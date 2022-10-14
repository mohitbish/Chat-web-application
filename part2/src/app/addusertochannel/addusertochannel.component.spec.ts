import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusertochannelComponent } from './addusertochannel.component';

describe('AddusertochannelComponent', () => {
  let component: AddusertochannelComponent;
  let fixture: ComponentFixture<AddusertochannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddusertochannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddusertochannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
