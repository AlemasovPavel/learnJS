"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const questionNumber1 = prompt('Один из последних просмотренных фильмов?', '');
const questionNumber2 = prompt('Насколько оцените его?', '');
const questionNumber3 = prompt('Один из последних просмотренных фильмов?', '');
const questionNumber4 = prompt('Насколько оцените его?', '');

personalMovieDB.movies[questionNumber1] = questionNumber2;
personalMovieDB.movies[questionNumber3] = questionNumber4;

console.log(personalMovieDB);