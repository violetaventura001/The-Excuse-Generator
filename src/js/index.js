/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  button = () => {
    let who = ["the dog", "my granma", "his turtle", "my bird"];
    let what = ["eat", "pissed", "crushed", "broked"];
    let when = [
      "before the class",
      "right in time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let whoRandom2 = Math.floor(Math.random() * who.length);
    let whatRandom2 = Math.floor(Math.random() * what.length);
    let whenRandom2 = Math.floor(Math.random() * when.length);
  };
};

function excuse() {
  let exc = " ";
  let whoRandom2 = randEx(who);
  let whatRandom2 = randEx(what);
  let whenRandom2 = randEx(when);
  let exc =
    "HOLY SHIT YOU COULDNT BELIEVE IT BUT THIS CHICK......," +
    whoRandom2 +
    whatRandom2 +
    whenRandom2;

  console.log(exc);
  document.getElementById("domain").innerHTML = exc;
}
