//Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

function arrayClone(arr){
    let array = [];
    for(let i = 0; i < arr.length; i++){
        array.push(arr[i]);
    }
    return array;
}

var arr1 = arrayClone(vegetables);