import fetch from "node-fetch";

const API_URL = "https://starwars.egghead.training/";

const responsePromise = fetch(API_URL + "films");

let filmTitles = "Loading...";
console.log(filmTitles);

responsePromise
  .then((response) => {
    return response.json();
  })
  .then((films) => {
    const filmTitles = films
      .sort((a, b) => a.episode_id - b.episode_id)
      .map((film) => `${film.episode_id}. ${film.title}`);
    console.log(filmTitles);
  });
