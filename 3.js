// Задача №3
/*Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), 
которая принимает число num в качестве аргумента и вставляет двоеточие (:) между двумя
 нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.*/

// Императивный

let arrayOfNumbers = prompt("Введите число");

function colonOdd(num) {
    let arr = num.split("");
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2 !== 0) && (arr[i + 1] % 2 !== 0) && (arr[i + 1] !== undefined)) {
            answer.push(arr[i] + ":");
        } else answer.push(arr[i]);
    }
    return answer.join("");
}

colonOdd(arrayOfNumbers);

// Декларативный

// let alternativearrayOfNumbers = prompt("Введите число");

// function alternativeColonOdd(num) {
//     let arr = num.split("");
//     let answer = arr.map((item, index, array) => {
//         if ((array[index] % 2 !== 0) && (array[index + 1] % 2 !== 0) && (array[index + 1])) {
//             return (array[index] + ":");
//         }
//         return (array[index]);
//     });
//     console.log(answer.join(""));
// }

// alternativeColonOdd(alternativearrayOfNumbers);