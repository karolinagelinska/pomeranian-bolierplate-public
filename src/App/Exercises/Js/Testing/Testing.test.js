import { sum } from './Testing';
describe('Testing component with examples', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 5 + 2 to equal 7', () => {
    expect(sum(5, 2)).toBe(7);
  });
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });
});

//można zamiast test używać it

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
test('the data is peanut butter', async () => {
  const result = 'peanut butter';
  const data = await Promise.resolve(result);
  expect(data).toBe(result);
});
