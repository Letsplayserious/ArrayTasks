// Напишите функцию randomElement(arr), которая возвращает случайный элемент из массива.

function randomElement(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
    }

    var arr = [24, 45, 22, 35, 43];
    document.writeln(randomElement(arr)); // 22