import * as React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from 'root/ProductsPage/ProductsPage';

jest.mock('services/catalogs.service');

describe('SUit test ProductsPage', () => {
  test('should be render correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProductsPage />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy();
  });
});
