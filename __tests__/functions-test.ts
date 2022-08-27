import quantity from '../src/utils/functions';

test('find id 2 return quantity 3', () => {
  expect(quantity([{ id: "1", quantity: 0 }, { id: "2", quantity: 3 }], "2")).toBe(3);
});

test('find id 1 return quantity 0', () => {
  expect(quantity([{ id: "1", quantity: 0 }, { id: "2", quantity: 3 }], "1")).toBe(0);
});