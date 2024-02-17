const myFunction = (a, b, c) => {
  const iter = (n, k, m, acc) => {
    const rawItemsCount = Math.floor(n / k);
    const detailsCount = Math.floor(k / m) * rawItemsCount;
    const remaining = n % k + (k % m) * rawItemsCount;
  
    if (detailsCount < 1) {
      return 0;
    }

    if (remaining >= k) {
      return iter(remaining, k, m, acc + detailsCount);
    } else {
      return acc + detailsCount;
    }
  }

  return iter(a, b, c, 0);
}

export default myFunction;


// console.log('!!! ', myFunction(13, 5, 3));
/*
n, k, m = 1, 1, 2 // кг: сплав, заготовка, деталь 
1) 
x заготовок = = n /k = Math.floor(1 / 1) = 1 
remaining = 1 % 1 = 0 kg

y деталей = (k / m) = Math.floor(1 / 2 ) = 0.5 
return 0
=======
n, k, m = 13, 5, 3 // кг: сплав, заготовка, деталь 

1) 
x заготовок = = n /k = Math.floor(13 / 5) = 2 
remaining = 13 % 5 = 3 kg

y деталей = (k / m) = Math.floor(5 / 3 ) = 1 
remaining = 5 % 3 = 2
y * x = 2 * 1 = 2 детали
remaining = 2 * 2 = 4 kg

total remaining = 3 + 7 = 7 kg

2)
total remaining >= k запускаем снова расчет:

n, k, m = 7, 5, 3 // кг: сплав, заготовка, деталь 
x заготовок = = n /k = Math.floor(7 / 5) = 1
remaining = 7 % 5 = 2 kg

y деталей = (k / m) = Math.floor(5 / 3 ) = 1 * x = 1
remaining = k % m = 5 % 3 = 2 * y = 2 kg

total remaining = 2 + 2 = 4 kg

3)
total remaining < k конец:
y = 2 + 1
remaining = 4
*/
