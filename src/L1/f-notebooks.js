const myFunction = (inputs) => {
  const [n1x, n1y, n2x, n2y] = inputs;
  const combinations = [
    [n1x + n2x, Math.max(n1y, n2y)],
    [n1x + n2y, Math.max(n1y, n2x)],
    [n1y + n2x, Math.max(n1x, n2y)],
    [n1y + n2y, Math.max(n1x, n2x)]
  ];

  const areas = combinations.map(([x, y]) => x * y);
  const minArea = Math.min(...areas);
  const minIndex = areas.indexOf(minArea);
  const size = {
    x: combinations[minIndex][0],
    y: combinations[minIndex][1]
  };

  return `${size.x} ${size.y}`;
}

export default myFunction;

