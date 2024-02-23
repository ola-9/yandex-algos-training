/*
Игра PitCraft происходит в двуерном мире, который состоит
из блоков размеров 1 на 1 метр. Остров игорока представляет
сообой набор столбцов различной высоты, состоящих из блоков
камня и окруженный морем. Над островом прошел сильный дождь,
который заполнил водой все низины, а не поместившаяся в них
вода стекла в море, не увеличив его уровень

По ландшафту острова определите, сколько блоков воды
осталось после дождя в низинах на острове.

    x
  xwx
xwxxxwwx
xwxxxwwx
xxxxxxxxx

на входе массив из высот столбцов: [3, 1, 4, 3, 5, 1, 1, 3, 1];
[islands](https://docs.google.com/spreadsheets/d/1S1pOc31wZ8nZ3gcyvYYP3uElxNvA3Jp0-diLkimGQ9E/edit?usp=sharing)
*/


  

const islandFlood = (h) => {
    let maxPos = 0;
    for (let i = 0; i < h.length; i += 1) {
        if (h[i] > h[maxPos]) {
            maxPos = i;
        }
    }
    let res = 0;
    let current = 0;
    for (let i = 0; i < maxPos; i += 1) {
        if (h[i] > current) {
            current = h[i];
        }
        res += current - h[i]
    }
    current = 0;
    for (let i = h.length - 1; i > maxPos; i -= 1) {
        if (h[i] > current) {
            current = h[i]
        }
        res += current - h[i]
    }

    return res;

};

const heights = [3, 1, 4, 3, 5, 1, 1, 3, 1];
console.log(islandFlood(heights)); // 7
const heights2 = [2, 1, 4, 3, 5, 1, 1, 5, 1, 3, 1]
console.log(islandFlood(heights2)); // 12
const heights3 = [1, 1, 3, 1];
console.log(islandFlood(heights3)); // 0
console.log(islandFlood([3, 1, 2])); // 1

