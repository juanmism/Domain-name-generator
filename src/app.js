/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function concatString() {
  let result = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        result.push(pronoun[i].concat(adj[j]).concat(noun[k]) + " ");
      }
    }
  }

  document.getElementById("domain").innerHTML = result;
}
window.onload = concatString();
