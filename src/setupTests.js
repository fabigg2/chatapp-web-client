import {createSerializer} from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
