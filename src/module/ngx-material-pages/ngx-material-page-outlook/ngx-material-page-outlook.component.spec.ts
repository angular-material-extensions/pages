import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialPageOutlookComponent } from './ngx-material-page-outlook.component';

describe('NgxMaterialPageOutlookComponent', () => {
  let component: NgxMaterialPageOutlookComponent;
  let fixture: ComponentFixture<NgxMaterialPageOutlookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialPageOutlookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialPageOutlookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
