// Write a test to check that the function getFullYear returns the correct year (be careful to not create a time bomb)
import { getFullYear } from './utils';
import { getFooterCopy } from './utils';
import { getLatestNotification } from './utils';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('getFullYear', () => {
    it('returns correct year', () => {
        expect(getFullYear()).toEqual(new Date().getFullYear());
    });
});
// Write a test to check that getFooterCopy returns the correct string when the argument is true or false
describe('getFooterCopy', () => {
    it('returns correct string when argument is true', () => {
        expect(getFooterCopy(true)).toEqual('Holberton School');
    });
    it('returns correct string when argument is false', () => {
        expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
    });
});

// Write a test to check that getLatestNotification returns the correct string
describe('getLatestNotification', () => {
    it('returns correct string', () => {
        expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
