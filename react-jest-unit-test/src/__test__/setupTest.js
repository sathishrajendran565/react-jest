//Setup del adapter de ensyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//Esta config ayuda a capturar la funcion fetch y asi poderla mockear cuando se requiera usarla, no es necesario usar la real (con la que interactua en la web)
global.fetch = require('jest-fetch-mock');