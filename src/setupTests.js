import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import dotenv from 'dotenv';

dotenv.config({ path: './.env.development' });

Enzyme.configure({ adapter: new Adapter() });
