const sum = (x: number, y: number) => {
  return x + y;
};

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
  expect(sum(2, 3)).toEqual(5);
  expect(sum(2, 4)).toEqual(6);
});
