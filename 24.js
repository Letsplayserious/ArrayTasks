// Напишите функцию removeItem(arr, num), которая удаляет определенный элемент из массива.
// function removeItem(arr, num) {
//     // Ваш код
//     }
//     document.writeln(removeItem([3, 5, 7, 8, 5], 5)); // [3,7,8]

function removeItem(array, num){
    const answer = [];
    array.filter(item => {
        if(item !== num){
            answer.push(item);
        }
    })
    return answer;
}

const arr = [3, 5, 7, 8, 5];
const toDelete = 5;

removeItem(arr, toDelete);