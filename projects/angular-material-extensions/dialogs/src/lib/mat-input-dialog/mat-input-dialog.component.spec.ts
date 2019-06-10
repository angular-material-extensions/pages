import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputDialog } from './mat-input-dialog.component';
import {STATIC_IMPORTS} from '../test/helper';
import {MatDialogRef} from '@angular/material';

describe('MatInputDialog', () => {
  let component: MatInputDialog;
  let fixture: ComponentFixture<MatInputDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatInputDialog ],
      imports: [...STATIC_IMPORTS],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInputDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
