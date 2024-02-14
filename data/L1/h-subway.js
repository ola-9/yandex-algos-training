const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [int1, int2, k1, k2] = lines.map(Number);
  const min1 = k1 + int1 * (k1 - 1);
  const max1 = k1 + int1 * (k1 + 1);
  const min2 = k2 + int2 * (k2 - 1);
  const max2 = k2 + int2 * (k2 + 1);
  const tmax = Math.min(max1, max2);
  const tmin = Math.max(min1, min2);
  if (tmin > tmax) {
    process.stdout.write('-1');
  } else {
    process.stdout.write(`${tmin} ${tmax}`);
  }
});
