import * as React from 'react';
import { shallow } from 'enzyme';
import OxxoApp from 'root/OxxoApp';

describe('SUit test OxxoApp', () => {
  test('should be render correctly', () => {
    const wrapper = shallow(<OxxoApp />);
    expect(wrapper).toBeTruthy();
  });
});
