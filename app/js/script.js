'use strict';

/* Задание на урок:

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания


// let arr = {
//     movies: {},
//     name: '',
// };

// const a = prompt('Ваше имя', '');

// arr.name = a;



// console.log(arr);



// function createCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// console.log(increment);


// let test = '12.8 23 pxsdfsdfsdf 23';
// console.log(parseFloat(test));


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания

let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const b = prompt('Какой фильм последний смотрели?', '');
        const d = prompt('сколько фильмов посмотрели', '');

        if (b != '' && d != '' && b != null && d != null && b.length < 50) {
            personalMovieDB.movies[b] = d;
            personalMovieDB.count = d;
        } else {
            console.log('Ты делаешь что-то не так...');
            i--;
        }

    }
}
// rememberMyFilms();



function showMyDB() {
    if (personalMovieDB.privat) {
        console.log(personalMovieDB);
    } else {
        console.log('У вас нет прав!');
    }
}
// showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
writeYourGenres();


console.log(personalMovieDB);