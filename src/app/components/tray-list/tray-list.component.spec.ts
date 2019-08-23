import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayListComponent } from './tray-list.component';

describe('TrayListComponent', () => {
  let component: TrayListComponent;
  let fixture: ComponentFixture<TrayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
