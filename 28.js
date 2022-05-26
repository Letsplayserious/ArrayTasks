// Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len, заполненный целыми числами, где каждое число больше предыдущего на единицу.

function generateNumbers(start, len) {
    let buffer = start;
    const array = [];
    // const initialValue = start;
    for(let i = 0; i < len; i++) {
        array.push(buffer);
        buffer++;
    }
    console.log(array);
}

generateNumbers(7, 10);