import { TestBed, inject } from '@angular/core/testing';

import { SxNgxFabricDialogService } from './dialog.service';

describe('DialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SxNgxFabricDialogService]
    });
  });

  it('should be created', inject([SxNgxFabricDialogService], (service: SxNgxFabricDialogService) => {
    expect(service).toBeTruthy();
  }));
});
