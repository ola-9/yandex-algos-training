/*
Дана последовательность числе длиной N

Найти последнее (правое) вхождение положительного числа Х
в нее или вывести -1, если число Х не встречалось.
*/

const findRightX = (seq, x) => {
    let res = -1;
    for (let i = seq.length; i >=0; i -= 1) {
        if (res === -1 && seq[i] === x) {
            res = i;
        }
    }
    return res;
};

console.log(findRightX([1, 2, 1, 2, 3], 2)); // 3
console.log(findRightX([1, 2, 1, 2, 3], 5)); // -1

const findRightX2 = (seq, x) => {
    let res = -1;
    for (let i = 0; i < seq.length; i += 1) {
        if (seq[i] === x) {
            res = i;
        }
    }
    return res;
};

console.log(findRightX2([1, 2, 1, 2, 3], 2)); // 3
console.log(findRightX2([1, 2, 1, 2, 3], 5)); // -1
