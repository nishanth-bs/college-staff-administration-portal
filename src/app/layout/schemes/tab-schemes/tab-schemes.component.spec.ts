import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSchemesComponent } from './tab-schemes.component';

describe('TabSchemesComponent', () => {
  let component: TabSchemesComponent;
  let fixture: ComponentFixture<TabSchemesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSchemesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
