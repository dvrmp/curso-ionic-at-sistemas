import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxPage } from './sandbox.page';

describe('SandboxPage', () => {
  let component: SandboxPage;
  let fixture: ComponentFixture<SandboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
