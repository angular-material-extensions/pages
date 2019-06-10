import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatLoadingDialog } from './mat-loading-dialog.component';
import {STATIC_IMPORTS} from '../test/helper';
import {MatDialogRef, MatProgressSpinnerModule} from '@angular/material';

describe('MatLoadingDialogComponent', () => {
  let component: MatLoadingDialog;
  let fixture: ComponentFixture<MatLoadingDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatLoadingDialog ],
      imports: [...STATIC_IMPORTS, MatProgressSpinnerModule],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLoadingDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
