/* RLE run-length encoding

Дана строка (возможно пустая), состоящая из букв А-Z:
AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBB

Нужно написать функцию RLE, которая на выходе даст строку
вида: A4B3C2XYZD4E3F3A6B28. И сгенерирует ошибку, если на
вход пришла невалидная строка.

Пояснения: Если символ встречается 1раз, он остается без
изменений; Если символ повторяется более 1 раза, к нему
добавляется количество повторений.
*/

const rle = (string) => {
    const arr = string.split('');
    const res = [];
    let count = 1;

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== arr [i + 1]) {
            res.push(arr[i], count);
            count = 0;
        }
        count += 1;
    }

    return res.join('');
}

console.log(rle(
    'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBB'
    )); //A4B3C2XYZD4E3F3A6B26

/* Упрощение задачи

Дана строка (возможно пустая), состоящая из букв А-Z:
AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBB

Нужно написать фукцию, которая на выходе даст строку вида:
ABCXYZDEFAB
*/

const rleSimplified = (string) => {
    const arr = string.split('');
    // let current = arr[0];
    const res = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] !== arr [i + 1]) {
            res.push(arr[i]);
        }
    }

    return res.join('');
}

// console.log(rleSimplified(
//     'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBB'
//     )); //ABCXYZDEFAB