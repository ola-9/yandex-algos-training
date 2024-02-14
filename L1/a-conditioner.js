const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  let result = 0;

  const [troom, tcond] = lines[0].split(' ').map(Number);
  const mode = lines[1].trim();
  if (mode === 'heat') {
    result = troom < tcond ? tcond : troom;
  } else if (mode === 'freeze') {
    result = troom > tcond ? tcond : troom;
  } else if (mode === 'auto') {
    result = tcond;
  } else if (mode === 'fan') {
    result = troom;
  }
  process.stdout.write(result.toString());
});
