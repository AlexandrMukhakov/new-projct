const numberFilms = +prompt("Сколько фильмов вы посмотрели?","");

const personalMoviesDB = {
    count: numberFilms,
    movies: {},
    acters: {},
    genres: [],
    priat: false
};

const a = prompt("Один из последних фильмов",""),
    b = prompt("На сколько оцените его?",""),
    c = prompt("Один из последних фильмов",""),
    d = prompt("На сколько оцените его?","");

    personalMoviesDB.movies[a] = b;
    personalMoviesDB.movies[c] = d;

    console.log(personalMoviesDB);