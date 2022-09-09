import fetch from "node-fetch";

const API_URL = "https://starwars.egghead.training/";

const responsePromise = fetch(API_URL + "films");

responsePromise
  .then((response) => {
    return response.json();
  })
  .then((films) => {
    const filmTitles = films.map((film) => `${film.episode_id}. ${film.title}`);
    console.log("filmTitles: ", filmTitles);
    console.log("films: ", films);
  });
