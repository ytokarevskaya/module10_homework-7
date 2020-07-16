// Задание 1

let initialValue = prompt('Введите значение для проверки чётности');
let numValue = +initialValue;

if (typeof(numValue) === 'number'){
  if (Boolean(numValue) === false){
    console.log("Упс, кажется, вы ошиблись");
  } else {
    if (numValue % 2 === 0) {
      console.log("Чётное");
    } else {
      console.log("Нечётное");
    }
  }
}
