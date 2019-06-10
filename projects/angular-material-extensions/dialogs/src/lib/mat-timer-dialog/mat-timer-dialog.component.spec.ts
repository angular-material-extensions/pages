import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTimerDialog } from './mat-timer-dialog.component';
import {STATIC_IMPORTS} from '../test/helper';
import {MatDialogRef} from '@angular/material';

describe('MatTimerDialog', () => {
  let component: MatTimerDialog;
  let fixture: ComponentFixture<MatTimerDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTimerDialog ],
      imports: [...STATIC_IMPORTS],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTimerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
