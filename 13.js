// Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.

var array1 = [5, 2, 1, -10, 8];
var array2 = [5, 2, 1, -9, 3, 7];

function union(arg1, arg2){
    var array3=[];
    for(let i = 0; i < arg1.length; i++){
        array3.push(arg1[i]);
    }

    for(let i = 0; i < arg2.length; i++){
        if (array3.includes(arg2[i])){
            continue;
        }
        else{
            array3.push(arg2[i]);
        }

    }
    console.log(array3);
}

union(array1, array2);

// ----------------------------------------------------------------

function union2(){
    var array3 = [], result=[], objx = {};
    array3 = array1.concat(array2);
    for(let i = 0; i < array3.length; i++){
        objx[array3[i]] = true;
    }
    for(let k in objx){
        result.push(k);
    }
    console.log(result);
}

union2(array1, array2);