// Задача №4
/*Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает 
строку в качестве аргумента и заменяет регистр каждого символа на противоположный. Например, 
если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].*/

let words = "КаЖдЫй ОхОтНиК";

function reversedCase(stroke) {
    let array = stroke.split("");

    let answer = [];

    for (let i = 0; i < stroke.length; i++) {
        if (array[i] == array[i].toUpperCase()) {
            answer.push(array[i].toLowerCase());
        } else if (array[i] == array[i].toLowerCase()) {
            answer.push(array[i].toUpperCase());
        } else {
            answer.push(array[i]);
        }
    }
    return answer.join("");
}