import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearcolumnComponent } from './yearcolumn.component';

describe('YearcolumnComponent', () => {
  let component: YearcolumnComponent;
  let fixture: ComponentFixture<YearcolumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearcolumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearcolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
