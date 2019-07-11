import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsPageComponent } from './dialogs-page.component';

describe('DialogsPageComponent', () => {
  let component: DialogsPageComponent;
  let fixture: ComponentFixture<DialogsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
