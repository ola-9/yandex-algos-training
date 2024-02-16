const myFunction = (inputs) => {
  const [int1, int2, k1, k2] = inputs.map(Number);
  const min1 = k1 + int1 * (k1 - 1);
  const max1 = k1 + int1 * (k1 + 1);
  const min2 = k2 + int2 * (k2 - 1);
  const max2 = k2 + int2 * (k2 + 1);
  const tmax = Math.min(max1, max2);
  const tmin = Math.max(min1, min2);
  if (tmin > tmax) {
    return -1;
  } else {
    return `${tmin} ${tmax}`;
  }
};

export default myFunction;
