// Задание 1

let initialValue = prompt('Введите значение для проверки чётности');
let numValue = +initialValue;

if (typeof(numValue) === 'number'){
  if (isNaN(numValue)){
    console.log("Упс, кажется, вы ошиблись");
  } else {
    if (numValue % 2 === 0) {
      console.log("Чётное");
    } else {
      console.log("Нечётное");
    }
  }
}

// Задание выполнено верно, но есть более простой способ отсеять значения NaN, которые получаются при попытке привести строковые значения к числовому типу. Для этого есть специальная функция isNaN. Пример - в коде выше.