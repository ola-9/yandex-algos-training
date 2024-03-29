/*
Дана последовательность числе длиной N

Найти первое (левое) вхождение положительного числа Х
в нее или вывести -1, если число Х не встречалось.
*/

const findX = (seq, x) => {
    let res = -1;
    for (let i = 0; i < seq.length; i += 1) {
        if (res === -1 && seq[i] === x) {
            res = i;
        }
    }
    return res;
};

console.log(findX([1, 2, 1, 2, 3], 2)); // 1
console.log(findX([1, 2, 1, 2, 3], 5)); // -1