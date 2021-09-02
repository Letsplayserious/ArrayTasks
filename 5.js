// Задача №5
/*Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены
повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
*/

let someArray = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];

function removeDuplicates(array) {
    let namesCollection = {};
    let answer = [];

    for(let i = 0; i < someArray.length; i++){
        if(!namesCollection[array[i]]){
            namesCollection[array[i]] = true;
            answer.push(array[i]);
        }
    }

    return answer;
}