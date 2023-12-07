// задание 1. Какая из приведенных записей означает создание новой переменной?
// Ответ: var age = 13;

// Задание 2. Какое значение вернет приведенный ниже код? 
/*
var age = 13;
typeof age;

//Решение
solution = () =>{
  var age = 13;
  console.log(typeof age)
}
solution();

// Ответ number
*/

// задание 3. Какое значение вернет приведенный ниже код? 
/*
var age = "13";
typeof age;

// Решение 
solution = () => {
    var age = "13";
    console.log(typeof age);
}
solution();

// Ответ string
*/

// Задание 4. Какое значение вернет приведенный ниже код? 
/*
var age = {
    years: '13'
};
typeof age

// Решение
solution = () => {
    var age ={
        years: "13"
    }
    console.log(typeof age);
}
solution();

// Ответ object
*/

// Задание 5. Какое значение вернет приведенный ниже код?
/*
var age = {
    years: 13,
    months: 10,
    days: 15
};
age.years;

// Решение
console.log(age.years);

// Ответ 13
*/

// Задание 6. Какое значение вернет приведенный ниже код? 
/*
var age = {
    years: 13,
    months: 10,
    days: 15
};
var answer = "Возраст: " + age["years"] + "лет, " + age.months + месяцев.answer;

// Ответ Возникнет ошибка
*/

// Задание 7. Какое значение вернет приведенный ниже код? 
/*
var age = {
    years: 13,
    months: 10,
    days: 15
};
// ответ false
*/

// Задание 8. Какое значение вернет приведенный ниже код?
/*
var age = {
    years: 13,
    months: 10,
    days: 15
};
console.log(age["years"] !== "15");
// Ответ true
*/

// Задание 9. Какое значение вернет приведенный ниже код?
/*
var animals = [];
animals.push("Кот");
animals.push("Пёс");
animals.push("Альпака");
animals[3];
// ответ undefined
*/

// Задание 10. Какое значение вернет приведенный ниже код?
/*
var animals = [];
animals.push("Кот");
animals.push("Пёс");
animals.push("Альпака");
animals.length
// ответ 3
*/

// Задание 11. Каково значение переменной a при вызове следующей функции?
/*
function countSum(num1, num2){
    num1 + num2;
}
var a = countSum(2, 3);
// ответ undefined
*/

// Задание 12. Какое значение вернет следующая функция при вызове?
/*
function fifthLetter(name) {
    if (name.length < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name [4] + ".";
}
fifthLetter();
// ответ undefined
*/

// Задание 13. Какое значение вернет следующая функция при вызове? 
/*
function fifthLetter(name) {
    if (name.length < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name[4] + ".";
}
fifthLetter("Николай");
// Ответ "Пятая буква вашего имени: о."
*/

// Задание 14. Какое значение вернет следующая функция при вызове? 
/*
function fifthLetter(name) {
    if (name.length < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name[4] + ".";
}
fifthLetter("Ник");
// ответ undefined
*/

// Задание 15. Какое значение вернет следующая функция при вызове?
/*
function getGreeting(name, patronymic, surname) {
    if (name && patronymic && surname) {
        return "Здравствуйте, " + name + " " + patronymic + " " + "!";
    } else if (name && patronymic) {
        return "Здраствуйте, " + name + " " + patronymic + "!";
    } else if(name) {
        return "Здравствуйте, " + name + "!";
    }else {
        return "Здравствуйте,  незнакомец!";
    }
}
getGreeting("иван", "Иванович");
// ответ "Здраствуйте, иван Иванович!"
*/
