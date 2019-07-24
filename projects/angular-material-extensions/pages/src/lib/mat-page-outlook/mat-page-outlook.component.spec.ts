import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPageOutlookComponent } from './mat-page-outlook.component';

describe('NgxMaterialPageOutlookComponent', () => {
  let component: MatPageOutlookComponent;
  let fixture: ComponentFixture<MatPageOutlookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPageOutlookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPageOutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
