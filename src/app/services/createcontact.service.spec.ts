import { TestBed } from '@angular/core/testing';

import { CreatecontactService } from './createcontact.service';

describe('CreatecontactService', () => {
  let service: CreatecontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatecontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
