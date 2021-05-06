import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShemaProisvolComponent } from './shema-proisvol.component';

describe('ShemaProisvolComponent', () => {
  let component: ShemaProisvolComponent;
  let fixture: ComponentFixture<ShemaProisvolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShemaProisvolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShemaProisvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
