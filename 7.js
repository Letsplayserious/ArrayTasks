// Используя метод sort перепишите предсталенный ниже код,
// который с помощью цикла for случайно изменяет порядок расстановки элементов массива.

// function shuffle(arr) {
//     for (var i = arr.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr;
// }

function shuffle(){
    return Math.random() - 0.5;
}

let arr = [123, 2345, 368, 297, 0, 10];
arr.sort(shuffle);
console.log(arr);