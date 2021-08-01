import * as React from 'react';
import { shallow } from 'enzyme';
import Select from 'components/Select/Select';

describe('SUit test Select', () => {
  test('should be render correctly', () => {
    const wrapper = shallow(
      <Select
        label="Selecciona Pais"
        name="pais"
        options={[{ id: '1', name: 'option1' }]}
        isLoading={false}
        onSelect={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should be show loading legend', () => {
    const wrapper = shallow(
      <Select
        label="Selecciona Pais"
        name="pais"
        options={[{ id: '1', name: 'option1' }]}
        isLoading={true}
        onSelect={() => {}}
      />
    );
    expect(wrapper.find('option').text()).toBe('Loading...');
  });

  // test('should be submit form and bubble keyword', () => {
  //   const wrapper = shallow(<SearchBox handleSubmit={() => {}} loading={true} />);
  //   wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  //   expect(wrapper.find('button')).toEqual({});
  // });
});
