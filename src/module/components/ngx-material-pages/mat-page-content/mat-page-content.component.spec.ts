import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPageContentComponent } from './mat-page-content.component';

describe('NgxMaterialPageContentComponent', () => {
  let component: MatPageContentComponent;
  let fixture: ComponentFixture<MatPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
