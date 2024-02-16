function squareRoot(inputs) {
  const [a, b, c] = inputs.map(Number);
  
  if (c < 0) {
    return 'NO SOLUTION';
  }
  if (a === 0) {
    if (Math.pow(c, 2) === b) {
      return 'MANY SOLUTIONS';
    } else {
      return 'NO SOLUTION';
    }
  }
  let x = (Math.pow(c, 2) - b) / a;
  if (Number.isInteger(x)) {
    return x;
  } else {
    return 'NO SOLUTION';
  }
}

export default squareRoot;
