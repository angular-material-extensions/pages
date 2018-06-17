import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPageLoaderComponent } from './mat-page-loader.component';

describe('NgxMaterialPageLoaderComponent', () => {
  let component: MatPageLoaderComponent;
  let fixture: ComponentFixture<MatPageLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPageLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
