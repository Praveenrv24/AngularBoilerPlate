/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoreserviceService } from './coreservice.service';

describe('Service: Coreservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreserviceService]
    });
  });

  it('should ...', inject([CoreserviceService], (service: CoreserviceService) => {
    expect(service).toBeTruthy();
  }));
});
