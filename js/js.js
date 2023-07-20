"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}