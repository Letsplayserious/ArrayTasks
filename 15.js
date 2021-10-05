// Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.

var numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

function compareNumbers1(arg){
    for(let d = 0; d < arg.length; d++){
        for(let i = 0; i < arg.length; i++){
            if(arg[i] > arg[i+1]){
                let k = arg[i];
                arg[i] = arg[i+1];
                arg[i+1] = k;
            }
        }
    }
    console.log(arg);
}

compareNumbers1(numbers);



// --------------------------

function compareNumbers2(arg){
    var result = numbers.sort((a,b) =>{return a-b});
    return result;
}

compareNumbers2(numbers);