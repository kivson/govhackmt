/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ElogiosComponent } from './elogios.component';

describe('ElogiosComponent', () => {
  let component: ElogiosComponent;
  let fixture: ComponentFixture<ElogiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElogiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElogiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
