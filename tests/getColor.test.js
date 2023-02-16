import { getColor } from '../src/scripts/getColor.js';

test('Change paragraph color by click', () => {
  const arr = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

  expect(getColor(arr)).not.toBe(undefined);
});
