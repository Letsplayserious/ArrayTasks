// Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2 и наоборот.

var array1 = [1, 2, 'a'];
var array2 = [1, 2, 3, 4, 'b'];

function difference(arg1, arg2){
    var array3 = [];
    for(let i = 0; i < arg1.length; i++){
        if (arg2.includes(arg1[i])){
            continue;
        }
        else{
            array3.push(arg1[i]);
        }
    }
    for(let i = 0; i < arg2.length; i++){
        if (arg1.includes(arg2[i])){
            continue;
        }
        else{
            array3.push(arg2[i]);
        }
    }
    console.log(array3);
}

difference(array1, array2);