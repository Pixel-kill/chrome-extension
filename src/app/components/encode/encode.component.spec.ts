import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodeComponent } from './encode.component';

describe('EncodeComponent', () => {
  let component: EncodeComponent;
  let fixture: ComponentFixture<EncodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncodeComponent]
    });
    fixture = TestBed.createComponent(EncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
