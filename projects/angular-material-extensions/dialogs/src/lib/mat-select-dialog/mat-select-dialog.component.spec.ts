import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectDialog } from './mat-select-dialog.component';
import {STATIC_IMPORTS} from '../test/helper';
import {MatDialogRef} from '@angular/material';

describe('MatSelectDialog', () => {
  let component: MatSelectDialog;
  let fixture: ComponentFixture<MatSelectDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSelectDialog ],
      imports: [...STATIC_IMPORTS],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
