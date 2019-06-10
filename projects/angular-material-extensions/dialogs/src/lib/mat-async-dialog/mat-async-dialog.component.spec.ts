import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAsyncDialog } from './mat-async-dialog.component';
import {STATIC_IMPORTS} from '../test/helper';
import {MatDialogRef} from '@angular/material';

describe('MatAsyncDialog', () => {
  let component: MatAsyncDialog;
  let fixture: ComponentFixture<MatAsyncDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatAsyncDialog ],
      imports: [...STATIC_IMPORTS],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatAsyncDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
