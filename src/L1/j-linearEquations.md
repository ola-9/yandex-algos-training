# J. Система линейных уравнений - 2

Ограничение времени	1 секунда

Ограничение памяти	64Mb

Ввод	стандартный ввод или input.txt

Вывод	стандартный вывод или output.txt

Даны числа a, b, c, d, e, f. Решите систему линейных уравнений



## Формат ввода

Вводятся 6 **вещественных** чисел - коэффициенты уравнений.

## Формат вывода

Вывод программы зависит от вида решения этой системы. Если система не имеет решений, то программа должна вывести единственное число 0. Если система имеет бесконечно много решений, каждое из которых имеет вид y=kx+b, то программа должна вывести число 1, а затем значения k и b. Если система имеет единственное решение (x<sub>0</sub>,y<sub>0</sub>), то программа должна вывести число 2, а затем значения x<sub>0</sub> и y<sub>0</sub>. Если система имеет бесконечно много решений вида x=x<sub>0</sub>, y — любое, то программа должна вывести число 3, а затем значение x<sub>0</sub>. Если система имеет бесконечно много решений вида y=y<sub>0</sub>, x — любое, то программа должна вывести число 4, а затем значение y<sub>0</sub>. Если любая пара чисел (x,y) является решением, то программа должна вывести число 5.

Числа x<sub>0</sub> и y<sub>0</sub> будут проверяться с точностью до пяти знаков после точки.

Пример 1
Ввод	Вывод
1
0
0
1
3
3
2 3 3

Пример 2
Ввод	Вывод
1
1
2
2
1
2
1 -1 1

Пример 3
Ввод	Вывод
0
2
0
4
1
2
4 0.5
