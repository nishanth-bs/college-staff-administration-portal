import { TestBed, inject } from '@angular/core/testing';

import { TokeninterceptorService } from './tokeninterceptor.service';

describe('TokeninterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokeninterceptorService]
    });
  });

  it('should be created', inject([TokeninterceptorService], (service: TokeninterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
