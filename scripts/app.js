function init() {
  let hangman = document.querySelector(".hangman-div");
  const words = [
    "Afghanistan",
    "Argentina",
    "Azerbaijan",
    "Australia",
    "Bahrain",
    "Egypt",
    "India",
    "Germany",
    "Georgia",
    "Switzerland",
    "Malaysia",
    "Morocco",
    "Norway",
    "Pakistan",
    "Palestine",
    "Philippines",
  ];

  const letters = document.querySelector(".letters");
  for (let i = 65; i < 91; i++) {
    const btn = document.createElement("button");
    btn.classList.add("letter");
    btn.innerText = String.fromCharCode(i);
    letters.append(btn);
  }

  const word = words[Math.floor(Math.random() * words.length)];
  // console.log(word);

  const guess = document.querySelector(".guess");
  const array = Array.from(word.toLowerCase());
  // console.log(array);

  array.forEach((x) => {
    const span = document.createElement("span");

    guess.appendChild(span);
    console.log(span);
  });

  //  play sound on hover
  letters.addEventListener("mouseover", mouseOver);
  function mouseOver() {
    document.getElementById("Btn").play();
  }

  function losePopup() {
    const newDiv = document.createElement("div");
    const lose = document.createTextNode(`You Lose :( `);
    const line = document.createElement("br");
    const answer = document.createTextNode(`The answer is ${word}`);
    const newLine = document.createElement("br");
    const btn = document.createElement("button");
    const startAgain = document.createTextNode("Try Again");
    newDiv.appendChild(lose);
    newDiv.appendChild(line);
    newDiv.appendChild(answer);
    newDiv.appendChild(newLine);
    newDiv.appendChild(btn);
    btn.appendChild(startAgain);
    btn.classList.add("refresh");
    newDiv.classList.add("popup");
    document.body.appendChild(newDiv);
  }

  function winPopup() {
    const newDiv = document.createElement("div");
    const lose = document.createTextNode(`You Win :) `);
    const line = document.createElement("br");
    const answer = document.createTextNode(`The answer is ${word}`);
    const newLine = document.createElement("br");
    const btn = document.createElement("button");
    const startAgain = document.createTextNode("Play Again");
    newDiv.appendChild(lose);
    newDiv.appendChild(line);
    newDiv.appendChild(answer);
    newDiv.appendChild(newLine);
    newDiv.appendChild(btn);
    btn.appendChild(startAgain);
    btn.classList.add("refresh");
    newDiv.classList.add("popup");
    document.body.appendChild(newDiv);
  }
  // btn.addEventListener("click", () => {
  //   location.reload();
  // });

  let wrongs = 0;
  const guessed = document.querySelectorAll(".guess span");
  const letter = document.querySelector(".letter");
  document.addEventListener("click", (x) => {
    let status = false;
    if (x.target.classList == "letter") {
      x.target.classList.add("clicked");
      letters.disabled = true;

      // letter choosen
      const picked = x.target.innerHTML.toLowerCase();
      // console.log(picked);

      array.forEach((wordLetter, index) => {
        if (picked == wordLetter) {
          status = true;
          guessed.forEach((span, i) => {
            if (index === i) {
              span.innerHTML = picked;
            }
            console.log(span);
          });
        }
      });

      if (status !== true) {
        // add sound
        wrongs++;
        hangman.classList.add(`w${wrongs}`);

        document.getElementById("wrong").play();
        if (wrongs === 6) {
          losePopup();
          letters.classList.add("end");
        }
      } else {
        document.getElementById("correct").play();
      }
    }
  });

  // const answer = [];
  // for (let i = 0; i < word.length; i++) {
  //   answer[i] = "_";
  // }

  // for (let i = 0; i < word.length; i++) {
  //   if (word[i] === letter) {
  //     answer[i] = letter;
  //   }
  // }

  // function resetGame(event) {
  //   event.classList.remove("popup");
  // }
  // newDiv.addEventListener("click", resetGame);
}
window.addEventListener("DOMContentLoaded", init);
