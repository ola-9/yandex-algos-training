import myFunction from "../src/L1/f-notebooks";

test('notebooks', () => {
  expect(myFunction([5, 7, 3, 2])).toEqual('9 5');
  expect(myFunction([10, 2, 10, 2])).toEqual('20 2');
  expect(myFunction([3, 5, 6, 4])).toEqual('7 6');
})

