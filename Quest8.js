// Задание 8

let myMap = new Map();

myMap.set(1, 'Овчаров Евгений Михайлович');
myMap.set(2, 'Кугубаева Екатерина Вячеславовна');
myMap.set(3, 'Абдулова Анастасия Равильевна');

    
for (let name of myMap){
  console.log(`Ключ — ${name[0]}, Значение — ${name[1]}`)
}
