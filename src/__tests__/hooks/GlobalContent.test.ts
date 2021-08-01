import { useGlobalContext } from 'hooks/GlobalContext';

describe('SUit test GlobalContext', () => {
  test('should be defined', () => {
    expect(useGlobalContext).toBeDefined();
  });
});
