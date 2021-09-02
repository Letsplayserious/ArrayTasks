// Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива.
let array = [1,2,3,4,5,6,7,8,9];

function getLast(array, n){
    let result = [];
    if (array == null){
        return false;
    }
    if (n == null){
        result.push(array[array.length - 1]);
    }
    else {
        n = -n;
        result = array.slice(n);
    }
    return result;
}

console.log(getLast());
console.log(getLast(array, 4));
console.log(getLast(array, 12));