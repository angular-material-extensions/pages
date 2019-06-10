import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {STATIC_IMPORTS} from '../test/helper';
import {MatRadioDialog} from './mat-radio-dialog.component';
import {MatDialogRef} from '@angular/material';

describe('MatRadioDialog', () => {
  let component: MatRadioDialog;
  let fixture: ComponentFixture<MatRadioDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatRadioDialog],
      imports: [...STATIC_IMPORTS],
      providers: [{provide: MatDialogRef, useValue: {}}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatRadioDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
