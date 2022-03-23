// Напишите функцию startingSubstring(arr), которая возвращает общую начальную подстроку в массиве строк.
// document.writeln(res1); // Кап
// document.writeln(res2); // Ре
function startingSubstring(arg){
    let x = [];
    let a = arg[0], b = arg[1];

    for (let i = 0; i < a.length; i++) {
        if(a[i] === b[i]){
            x.push(a[i]);
        }
        else{
            break;
        }
    }
    let answer = x.join("");
    document.writeln(answer);
}

var arr1 = ['Капуста', 'Капитал'];
var arr2 = ['Репа', 'Редиска'];

startingSubstring(arr1);