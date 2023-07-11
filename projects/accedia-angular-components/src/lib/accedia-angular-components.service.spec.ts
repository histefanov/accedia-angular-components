import { TestBed } from '@angular/core/testing';

import { AccediaAngularComponentsService } from './accedia-angular-components.service';

describe('AccediaAngularComponentsService', () => {
  let service: AccediaAngularComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccediaAngularComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
