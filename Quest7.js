// Задание 7

let arr = [1, 2, 3, 4, 5, 6, 7, 0, 0, 0]
let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i < arr.length; i++){
  if (arr[i] == 0){
    zero += 1;
    continue;
  } else {
    if (arr[i] % 2 === 0) {
      even += 1;
      continue;
    } else {
      odd += 1;
      continue;
    }
  }
}

console.log('Чётные: ' + even);
console.log('Нечётные: ' + odd);
console.log('Нулевые: ' + zero);

// Задача решена не совсем верно. Если в массиве есть значения не числового типа (строки, логические значения и т.д.), то они причисляются к нечетным значениям, хотя по условию они не должны учитываться вообще. Ниже верный вариант решения:

const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

let even = 0, odd = 0, zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
      if (arr[i] === 0) {
        zero += 1;
      } else if (arr[i] % 2 === 0) {
        even += 1;
      } else {
        odd += 1;
      }
    }
  }

console.log('четных элементов: ', even);
console.log('нечетных элементов: ', odd);
console.log('нулей: ', zero);
