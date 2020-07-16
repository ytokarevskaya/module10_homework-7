// Задание 2

let y = 'Hello';

switch (typeof(y)) {
  case 'number':
    console.log(x + ' — число');
    break;
  case 'string':
    console.log(x + ' — строка');
    break;
  case 'boolean':
    console.log(x + ' — логический тип');
    break;
  default:
    console.log('Тип ' + x + ' не определён')
}
