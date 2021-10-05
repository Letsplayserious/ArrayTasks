// Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.

function countIdentic(arr) {
    let res = {};
    for(let i of arr){
        if(res[i] == null){
            res[i] = 1;
        }
        else res[i]++;
    }
    console.log(res);
}

countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]) // 4
countIdentic([15,14,13,19,13,14,14,14,7,9,9]) // 3  