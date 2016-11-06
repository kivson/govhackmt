/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntencoesComponent } from './intencoes.component';

describe('IntencoesComponent', () => {
  let component: IntencoesComponent;
  let fixture: ComponentFixture<IntencoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntencoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntencoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
