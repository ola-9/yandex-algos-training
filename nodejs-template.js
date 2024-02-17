const readline = require('readline');

function myFunction(inputs) {
  // массив строк, если нужны цифры, то inputs.map(Number)
  // inputs[0].split(' ').map(Number); - если ввод 1 строка
  return inputs;
}

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = []; // сюда сохраняем данные из ввода
let count = 0; 
rl.on('line', (line) => {
  lines.push(line);
  count += 1;
  if (count === 3) { // количество строк ввода
    rl.close();
  }
}).on('close', () => {

  // option-1
  console.log(myFunction(lines));
  
  // option-2
  // может возвращаться массив результатов
  const res = myFunction(lines);
  res.forEach((item) => console.log(item));
});
