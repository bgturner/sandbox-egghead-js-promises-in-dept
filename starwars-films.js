import fetch from "node-fetch";

const API_URL = "https://starwars.egghead.training/";

const responsePromise = fetch(API_URL + "films");

responsePromise.then((response) => {
  console.log("response: ", response);
});
