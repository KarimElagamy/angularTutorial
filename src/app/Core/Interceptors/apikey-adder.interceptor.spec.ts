import { TestBed } from '@angular/core/testing';

import { APIKeyAdderInterceptor } from './apikey-adder.interceptor';

describe('APIKeyAdderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      APIKeyAdderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: APIKeyAdderInterceptor = TestBed.inject(APIKeyAdderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
