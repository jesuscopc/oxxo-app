import * as React from 'react';
import { shallow } from 'enzyme';
import MainPage from 'root/MainPage/MainPage';

jest.mock('services/catalogs.service');

describe('SUit test MainPage', () => {
  test('should be render correctly', () => {
    const wrapper = shallow(<MainPage />);
    expect(wrapper).toBeTruthy();
  });
});
