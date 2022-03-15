// Напишите функцию findCouple(array, number), которая ищет в массиве все пары целых чисел, сумма которых равна заданному значению.

function findCouple(array, number){
  let arr = [];
  let obj = {};
  let answer = [];
  for(let i = 0; i < array.length; i++){
    obj[array[i]] = true;
  }
  arr = Object.keys(obj);

  for(let i = 0; i < arr.length; i++){
    for(let k = i + 1; k < arr.length; k++){
      if(+ arr[i] + + arr[k] === number){
        answer.push([arr[i], arr[k]]);
      }
    }
    if(number / arr[i] == 2){
      answer.push([arr[i], arr[i]]);
    }
  }

  answer.forEach(item => document.writeln(`Ваша пара чисел: ${item[0]} + ${item[1]} <br>`));

  if(answer.length == 0){
    document.writeln(`В массиве нет чисел в сумме образующих ${number}`);
  }
}


var num = 10;
var arr = [1, 6, 5, 2, 7, 5, 1, 4, 3, 9, 8, 11, 10, 18];


findCouple(arr, num);