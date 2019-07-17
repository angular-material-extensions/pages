import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPageComponent } from './pages-page.component';

describe('PagesPageComponent', () => {
  let component: PagesPageComponent;
  let fixture: ComponentFixture<PagesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
