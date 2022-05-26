// Напишите функцию arrayFilled(len, value), которая возвращает массив с заданным количеством len элементов value.
// document.writeln(arrayFilled(5, 1));   // [1,1,1,1,1]

function arrayFilled(len, value) {
    const array = [];
    for(let i = 0; i < len; i++){
        array.push(value);
    }


    return array;
}

arrayFilled(5, 1);