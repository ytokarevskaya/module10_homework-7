// Задание 6

let arr = [1, 1, 1];

let a = arr[0];
for (let i = 1; i < arr.length; i++){
    if (a == arr[i]){
        if (i+1 == arr.length){
            console.log('True');
        } else {
            continue;
        }
    } else {
        console.log('False');
        break;
    }
}

// Задание выполнено верно, но есть более оптимальное решение: создать переменную булева типа, которая будет отвечать за то, равные элементы в массиве или нет (true - равные, false - нет). Изначально задать ей значение true, затем с помощью цикла пройтись по массиву и сравнивать все элементы с первым. Если хотя бы один не равен первому, значит элементы в массиве уже не одинаковые и переменная будет равна false. Ниже пример:

const arr = [1, 2, 3, 3];

let isEqual = true;
const reference = arr[0];

for (let item of arr) {
    if (item !== reference) {
        isEqual = false;
    }
}

console.log(isEqual);