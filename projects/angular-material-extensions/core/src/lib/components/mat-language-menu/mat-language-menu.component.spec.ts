import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatLanguageMenuComponent} from './mat-language-menu.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatMenuModule} from '@angular/material';

describe('MatLanguageMenuComponent', () => {
  let component: MatLanguageMenuComponent;
  let fixture: ComponentFixture<MatLanguageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MatLanguageMenuComponent],
      imports: [FlexLayoutModule, MatButtonModule, MatMenuModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLanguageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
