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
