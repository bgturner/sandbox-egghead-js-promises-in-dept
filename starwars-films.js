import fetch from "node-fetch";

const API_URL = "https://starwars.egghead.training/";

let filmTitles = "Loading...";
console.log(filmTitles);

fetch(API_URL + "films")
  .then((response) => response.json())
  .then((films) => {
    console.log(getFilmTitles(films));
  });

function getFilmTitles(films) {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((film) => `${film.episode_id}. ${film.title}`);
}
