// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов
// заданных массивов.

var arr1 = [1, 2, 3, 4, 5, 27, 29, 53];
var arr2 = [4, 5, 6];

function counting(arg1, arg2){
    let result = [];
    let k;

    if((arg1 == null) || (arg2 ==null)){
        return false;
    }

    if(arg1.length == arg2.length){
        for (let i = 0; i < arg1.length; i++){
            result[i] = arg1[i] + arg2[i];
        }
    }

    else{
        k = arg1.length - arg2.length;
        if(k < 0){
            for(let i = 0; i < arg1.length; i++){
                result[i] = arg1[i] + arg2[i];
            }
            let b = arg2.slice(k);
            result = result.concat(b);
        }
        else{
            for(let i = 0; i < arg2.length; i++){
                result[i] = arg1[i] + arg2[i];
            }
            let b = arg1.slice(-k);
            result = result.concat(b);
        }
    }

    return result;
}

console.log(counting(arr2, arr1));