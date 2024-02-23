/*
Дана последовательность числе длиной N

Найти минимальное четное число в последовательности
или вывести -1, если такого не существует
*/

const findMinEven = (seq) => {
    let min = -1; // flag = false
    for (let i = 0; i < seq.length; i += 1) {
        if (seq[i] % 2 === 0 && (min === -1 || seq[i] < min)) { // !flag
            min = seq[i];
        }
    }
    return min;
};

console.log(findMinEven([1, 2, 1, 2, 3])); // 2
console.log(findMinEven([1, 5, 1, 7, 3])); // -1