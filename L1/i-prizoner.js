/*
За многие годы заточения узник замка Иф проделал в стене прямоугольное
отверстие размером D × E. Замок Иф сложен из кирпичей,
размером A × B × C.
Определите, сможет ли узник выбрасывать кирпичи в море через это отверстие,
если стороны кирпича должны быть параллельны сторонам отверстия.
*/

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let count = 0;

rl.on('line', (line) => {
  input.push(parseInt(line));
  count += 1;
  if (count === 5) {
    rl.close();
  }
});

rl.on('close', () => {
  const [a, b, c, d, e] = input;
if ((a <= d || b <= d || c <= d) && (a <= e || b <= e || c <= e)) {
    console.log('YES');
  } else {
    console.log('NO');
  }
});
