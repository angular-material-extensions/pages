import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialPageContentComponent } from './ngx-material-page-content.component';

describe('NgxMaterialPageContentComponent', () => {
  let component: NgxMaterialPageContentComponent;
  let fixture: ComponentFixture<NgxMaterialPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
