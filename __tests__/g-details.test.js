import myFunction from "../src/L1/g-details";

describe('details', () => {
  test('basic', () => {
    expect(myFunction(13, 5, 3)).toEqual(3);
    expect(myFunction(10, 5, 2)).toEqual(4);
    expect(myFunction(14, 5, 3)).toEqual(4);
    expect(myFunction(1, 1, 2)).toEqual(0);
  })
})
