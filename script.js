"use strict";


const personalMoviesDB = {
    count: 0,
    movies: {},
    acters: {},
    genres: [],
    priat: false,
    start: function() {
        personalMoviesDB.count = +prompt("Сколько фильмов посмотрели?","");
        while (personalMoviesDB.count == "" || personalMoviesDB.count == null || isNaN(personalMoviesDB.count))
        {
            personalMoviesDB.count = +prompt("Сколько фильмов посмотрели?","");
        }
    },
    PersonalLevel: function() {
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
    },
    detectPersonalLevel: function() {

        if (personalMoviesDB.count < 10) {
            console.log("Просмотренно слишком мало фильмов","");
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
            console.log("Нормально так фильмов");
        } else if (personalMoviesDB.count >= 30) {
            console.log("Вы киноман","");
        } else {
            console.log("Произошла ошибка","");
        }
        },
        ShowMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMoviesDB);
            }
        },
        tedLiVisioMb: function() {
            if (personalMoviesDB.priat) {
                personalMoviesDB.privat = false;
            }
            else {
                personalMoviesDB.privat = true;
            }
        },
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`Ваш любымый жанр? ${i}`);
            if (genre == "" || genre == null) {
                console.log("Вы ввели некорректные данные");
                i--;
            } else {
                personalMoviesDB.genres[i - 1] = genre;
            }
           
        } personalMoviesDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
            
        }
    };







