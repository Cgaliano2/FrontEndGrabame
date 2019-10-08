import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTypeTrayComponent } from './get-type-tray.component';

describe('GetTypeTrayComponent', () => {
  let component: GetTypeTrayComponent;
  let fixture: ComponentFixture<GetTypeTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTypeTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTypeTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
