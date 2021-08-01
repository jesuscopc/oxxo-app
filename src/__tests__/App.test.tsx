import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('SUit test OxxoApp', () => {
  test('should be render correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});
