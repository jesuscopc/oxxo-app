import * as React from 'react';
import { shallow } from 'enzyme';
import Routes from 'root/Routes';

describe('SUit test Routes', () => {
  test('should be render correctly', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toBeTruthy();
  });
});
