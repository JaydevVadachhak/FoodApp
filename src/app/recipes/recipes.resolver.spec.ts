import { TestBed } from '@angular/core/testing';

import { RecipesResolver } from './recipes.resolver';

describe('RecipesResolver', () => {
  let resolver: RecipesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RecipesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
