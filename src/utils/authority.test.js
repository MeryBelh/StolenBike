import 'jest';
import { getAuthority } from './authority';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;

describe('getAuthority should be strong', () => {

  expect(localStorage.getItem.mock.calls.length).toBe(0);

   it('empty', () => {
    expect(getAuthority()).toEqual(['guest']); // default value
  });
  
});
