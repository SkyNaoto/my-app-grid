import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box4Component } from './box4.component';

describe('Box4Component', () => {
  let component: Box4Component;
  let fixture: ComponentFixture<Box4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Box4Component]
    });
    fixture = TestBed.createComponent(Box4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
