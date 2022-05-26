// Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции from в позицию to.

// function moveElement(arr,from,to) { Ваш код}

let arr = [ 'a', 'b', 'c', 'd', 'e'];

function moveElement(arr, from, to){
    let buffer1 = arr[from];
    let buffer2 = arr[to];
    arr[from] = buffer2;
    arr[to] = buffer1;
    return arr;
}

console.log((moveElement(arr,4,0)));