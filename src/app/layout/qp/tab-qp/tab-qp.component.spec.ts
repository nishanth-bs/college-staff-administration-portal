import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabQpComponent } from './tab-qp.component';

describe('TabQpComponent', () => {
  let component: TabQpComponent;
  let fixture: ComponentFixture<TabQpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabQpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabQpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
