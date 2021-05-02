import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCreateComponent } from './manager-create.component';

describe('ManagerCreateComponent', () => {
  let component: ManagerCreateComponent;
  let fixture: ComponentFixture<ManagerCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
