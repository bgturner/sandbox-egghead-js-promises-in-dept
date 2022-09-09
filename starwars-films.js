import fetch from "node-fetch";

const API_URL = "https://starwars.egghead.training/";

const responsePromise = fetch(API_URL + "films");

responsePromise
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log("json: ", json);
  });
