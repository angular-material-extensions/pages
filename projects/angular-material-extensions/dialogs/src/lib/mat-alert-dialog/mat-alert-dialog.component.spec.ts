import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAlertDialog } from './mat-alert-dialog.component';
import {STATIC_IMPORTS} from '../test/helper';
import {MatDialogRef} from '@angular/material';

describe('MatAlertDialog', () => {
  let component: MatAlertDialog;
  let fixture: ComponentFixture<MatAlertDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAlertDialog ],
      imports: [...STATIC_IMPORTS],
      providers: [
        {provide: MatDialogRef, useValue: {}}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAlertDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
