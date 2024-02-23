/*
Дана последовательность числе длиной N (N > 0)

Найти максимальное число в последовательности
*/

const findMax = (seq) => {
    let res = seq[0]; // cлучай пустой последовательности обрабатываем отдельно 
    for (let i = 1; i < seq.length; i += 1) { // нулевой в res
        if (res < seq[i] ) {
            res = seq[i]; // копирование, но если объект тяжелый...
        }
    }
    return res;
};

console.log(findMax([1, 2, 1, 2, 3])); // 3


const findMax2 = (seq) => {
    let res = 0; 
    for (let i = 1; i < seq.length; i += 1) { // нулевой в res
        if (seq[res] < seq[i] ) {
            res = i;
        }
    }
    return res; // index of max
};

console.log(findMax2([1, 2, 1, 2, 3])); // 4
