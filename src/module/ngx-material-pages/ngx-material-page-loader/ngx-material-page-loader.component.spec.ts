import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialPageLoaderComponent } from './ngx-material-page-loader.component';

describe('NgxMaterialPageLoaderComponent', () => {
  let component: NgxMaterialPageLoaderComponent;
  let fixture: ComponentFixture<NgxMaterialPageLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialPageLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialPageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
