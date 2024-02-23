/*
Дана последовательность слов

Вывести все самые короткие слова через пробел
*/

const findShortestWords = (seq) => {
    let min = seq[0].length;
    for (let i = 1; i < seq.length; i += 1) {
        if (seq[i].length <= min) {
            min = seq[i].length;
        }
    }
    const res = [];
    for (let i = 0; i < seq.length; i += 1) {
        if (seq[i].length === min) {
            res.push(seq[i]);
        }
    }
    return res.join(' ');
};


console.log(findShortestWords(['aa', 'b', 'cc', 'd'])); // ['b d']
// console.log(find([1, 2, 1, 2, 3], 5)); // -1

