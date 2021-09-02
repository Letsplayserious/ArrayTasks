// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.

var array = [1,2,3,4,5,6,7,8,9];

function getFirst(array, n) {
    let result = [];
    if(n > 0){
        for(let i = 0; i < n; i++){
            result.push(array[i]);
        }
    }
    else if(n < 0){
        for(let i = 0; i < array.length + n; i++){
            result.push(array[i]);
        }
    }
    else if(n == null){
        result.push(array[0]);
    }
    else{
        return "Массив пустой";
    }

    return result;
};

console.log(getFirst(array));    // 1
console.log(getFirst(array, 4));    // 1,2,3,4
console.log(getFirst(array, -3));    // 1,2,3,4,5,6