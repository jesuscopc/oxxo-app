import * as React from 'react';
import { shallow } from 'enzyme';
import TableRequest from 'components/TableRequest/TableRequest';

describe('SUit test TableRequest', () => {
  test('should be render correctly', () => {
    const wrapper = shallow(<TableRequest data={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be render a list with items', () => {
    const items = [
      {
        original_price: '3999.00',
        product_detail_url: 'Motorola G',
        product_id: 'JSDSH878',
        product_main_image_url: 'http://motorola.jpeg',
        product_title: 'Motorola G'
      }
    ];
    const wrapper = shallow(<TableRequest data={items} />);
    expect(wrapper.find('span').text()).toBe(items[0].original_price);
  });
});
