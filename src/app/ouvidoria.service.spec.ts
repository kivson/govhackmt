/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OuvidoriaService } from './ouvidoria.service';

describe('Service: Ouvidoria', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OuvidoriaService]
    });
  });

  it('should ...', inject([OuvidoriaService], (service: OuvidoriaService) => {
    expect(service).toBeTruthy();
  }));
});
