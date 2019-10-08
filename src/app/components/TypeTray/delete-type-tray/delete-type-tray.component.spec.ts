import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTypeTrayComponent } from './delete-type-tray.component';

describe('DeleteTypeTrayComponent', () => {
  let component: DeleteTypeTrayComponent;
  let fixture: ComponentFixture<DeleteTypeTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTypeTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTypeTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
