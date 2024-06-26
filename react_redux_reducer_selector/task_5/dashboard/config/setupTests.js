// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import fetchMock from 'jest-fetch-mock';

configure({ adapter: new Adapter() });
fetchMock.enableMocks();
