import squareRoot from "../src/L1/d.squareRoot";

describe('square root', () => {
  
  test('basic', () => {
    expect(squareRoot([1, 0, 0])).toEqual(0);
    expect(squareRoot([1, 2, 3])).toEqual(7);
    expect(squareRoot([3, 13, 7])).toEqual(12);
  })

  test('no solution', () => {
    expect(squareRoot([0, 0, 5])).toEqual('NO SOLUTION');
    expect(squareRoot([0, 2, 2])).toEqual('NO SOLUTION');
    expect(squareRoot([1, 2, -3])).toEqual('NO SOLUTION');
    expect(squareRoot([2, 2, 3])).toEqual('NO SOLUTION');
  })

  test('many solutions', () => {
    expect(squareRoot([0, 4, 2])).toEqual('MANY SOLUTIONS');
    expect(squareRoot([0, 0, 0])).toEqual('MANY SOLUTIONS');
  })


});
