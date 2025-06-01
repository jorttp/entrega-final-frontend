import { TestBed } from '@angular/core/testing';

import { CategoriaProductoServiceService } from './categoriaProducto-service.service';

describe('CategoriaProductoServiceService', () => {
  let service: CategoriaProductoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaProductoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
