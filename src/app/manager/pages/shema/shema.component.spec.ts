import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShemaComponent } from './shema.component';

describe('ShemaComponent', () => {
  let component: ShemaComponent;
  let fixture: ComponentFixture<ShemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
