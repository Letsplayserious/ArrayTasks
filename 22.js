// Напишите функцию propertyValue(array, key), которая принимает в качестве аргументов массив объектов и имя свойства, а затем возвращает все значения данного свойства из массива объектов.

function propertyValue(array, key) {
    let answer = [];
    array.map(item => {
        answer.push(item[key]);
    })
    console.log(answer);
}

var litmir = [
    { author: 'Хэленка', title: 'Улетела сказка'},
    { author: 'Коул Кресли', title: 'Восстание Аркан'},
    { author: 'Райчел Мид', title: 'Золотая лилия'}
    ];

// propertyValue(litmir, 'title');
propertyValue(litmir, 'author');