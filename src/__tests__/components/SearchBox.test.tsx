import * as React from 'react';
import { shallow } from 'enzyme';
import SearchBox from 'components/SearchBox/SearchBox';

describe('SUit test SearchBox', () => {
  test('should be render correctly', () => {
    const wrapper = shallow(<SearchBox handleSubmit={() => {}} loading={false} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('button').text()).toBe('Buscar');
  });

  test('should be show loading button', () => {
    const wrapper = shallow(<SearchBox handleSubmit={() => {}} loading={true} />);
    expect(wrapper.find('button').text()).toBe('Loading...');
  });

  test('should be submit form and bubble keyword', () => {
    const wrapper = shallow(<SearchBox handleSubmit={() => {}} loading={true} />);
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(wrapper.find('button')).toEqual({});
  });
});
