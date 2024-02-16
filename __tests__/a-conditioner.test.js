import conditioner from "../src/L1/a-conditioner";

test('conditioner', () => {
  expect(conditioner(10, 20, 'heat')).toEqual(20);
  expect(conditioner(10, 20, 'freeze')).toEqual(10);
});
