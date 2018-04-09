import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialPagesComponent } from './ngx-material-pages.component';

describe('NgxMaterialPagesComponent', () => {
  let component: NgxMaterialPagesComponent;
  let fixture: ComponentFixture<NgxMaterialPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMaterialPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
