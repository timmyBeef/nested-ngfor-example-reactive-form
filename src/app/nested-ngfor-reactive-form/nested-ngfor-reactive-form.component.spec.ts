import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNgforReactiveFormComponent } from './nested-ngfor-reactive-form.component';

describe('NestedNgforReactiveFormComponent', () => {
  let component: NestedNgforReactiveFormComponent;
  let fixture: ComponentFixture<NestedNgforReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedNgforReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedNgforReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
