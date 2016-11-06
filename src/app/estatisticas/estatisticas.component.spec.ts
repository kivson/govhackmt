/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstatisticasComponent } from './estatisticas.component';

describe('EstatisticasComponent', () => {
  let component: EstatisticasComponent;
  let fixture: ComponentFixture<EstatisticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatisticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
