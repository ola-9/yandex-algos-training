/*
Дана последовательность числе длиной N (N > 1)

Найти максимальное число в последовательности
и второе по величине число (такое, которео будет
максимальным, если вычеркнуть из последовательности одно
максимальнео число)
*/

const findMax = (seq) => {
    let [max1, max2] = seq;
    for (let i = 0; i < seq.length; i += 1) {
        if (seq[i] > max1) {
            max2 = max1;
            max1 = seq[i];
        } else if (seq[i] > max2) {
            max2 = seq[i]
        }
    }

    return [max1, max2];
};

console.log(findMax([2, 1, 3, 2, 1])); // [3, 2]
console.log(findMax([2, 1, 5, 2, 1, 3])); // [5, 3]
console.log(findMax([2, 4, 1, 3, 2, 4, 1])); // [4, 4]
console.log(findMax([1, 2, 3, 4])); // [3, 2]
console.log(findMax([2, 2, 1, 2])); // [2, 2]


