import COUNTRIES from 'constants/Countries';
import { CatalogsService } from 'services';

describe('SUit test CatalogsService', () => {
  test('should be defined', () => {
    expect(CatalogsService).toBeDefined();
  });

  test('should be defined', () => {
    const res = CatalogsService.getCategories(COUNTRIES[0].id);
    expect(res).toBeDefined();
  });
});
