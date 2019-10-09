import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayTypeComponent } from './tray-type.component';

describe('TrayTypeComponent', () => {
  let component: TrayTypeComponent;
  let fixture: ComponentFixture<TrayTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
