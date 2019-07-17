import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPagesComponent } from './mat-pages.component';

describe('NgxMaterialPagesComponent', () => {
  let component: MatPagesComponent;
  let fixture: ComponentFixture<MatPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
