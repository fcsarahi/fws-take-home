import { TestBed } from '@angular/core/testing';

import { PokemonDetailResolverService } from './pokemon-detail-resolver.service';

describe('PokemonDetailResolverService', () => {
  let service: PokemonDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
