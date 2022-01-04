"use strict";

let numberFilms;

function start() {
    numberFilms = +prompt("Сколько фильмов посмотрели?","");
    while (numberFilms == "" || numberFilms == null || isNaN(numberFilms))
    {
        numberFilms = +prompt("Сколько фильмов посмотрели?","");
    }
}
start();

const personalMoviesDB = {
    count: numberFilms,
    movies: {},
    acters: {},
    genres: [],
    priat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Последний посмотренный фильм",""),
        b = prompt("Оцените его","");

if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMoviesDB.movies[a] = b;
    console.log("done");
} else {
    console.log("Error");
    i--;}
}
if (personalMoviesDB.count < 10) {
    console.log("Просмотренно слишком мало фильмов","");
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log("Нормально так фильмов");
} else if (personalMoviesDB.count >= 30) {
    console.log("Вы киноман","");
} else {
    console.log("Произошла ошибка","");
}
    console.log(personalMoviesDB); 