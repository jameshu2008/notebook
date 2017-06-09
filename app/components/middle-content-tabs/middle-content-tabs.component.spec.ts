import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleContentTabsComponent } from './middle-content-tabs.component';

describe('MiddleContentTabsComponent', () => {
  let component: MiddleContentTabsComponent;
  let fixture: ComponentFixture<MiddleContentTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleContentTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleContentTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
