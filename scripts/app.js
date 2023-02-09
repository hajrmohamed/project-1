function init() {
  let hangman = document.querySelector(".hangman-div");
  const chooseWord = document.querySelectorAll(".random");
  const words = [
    "Afghanistan",
    "Argentina",
    "Azerbaijan",
    "Australia",
    "Bahrain",
    "China",
    "Egypt",
    "India",
    "Germany",
    "Georgia",
    "Switzerland",
    "Qatar",
    "kuwait",
    "Malaysia",
    "Morocco",
    "Norway",
    "Malaysia",
    "Pakistan",
    "Palestine",
    "Philippines",
    "Thailand",
  ];

  // create buttons
  const letters = document.querySelector(".letters");
  for (let i = 65; i < 91; i++) {
    const btn = document.createElement("button");
    btn.classList.add("letter");
    btn.innerText = String.fromCharCode(i);
    letters.append(btn);
  }

  // function randomWord() {
  let word = words[Math.floor(Math.random() * words.length)];
  // console.log(word);

  let guess = document.querySelector(".guess");
  let array = Array.from(word.toLowerCase());
  // console.log(array);

  // create spans
  array.forEach((x) => {
    let span = document.createElement("span");

    guess.appendChild(span);
    console.log(span);
  });
  // }
  // chooseWord.addEventListener("click", randomWord);
  //  play sound on hover

  function mouseOver() {
    document.getElementById("playBtn").play();
  }

  letters.addEventListener("mouseover", mouseOver);
  const resetButton = document.querySelector(".reset");
  function losePopup() {
    const newDiv = document.createElement("div");
    const lose = document.createTextNode(`You Lost :( `);
    const line = document.createElement("br");
    const answer = document.createTextNode(`The answer is ${word}`);
    const newLine = document.createElement("br");

    newDiv.appendChild(lose);
    newDiv.appendChild(line);
    newDiv.appendChild(answer);
    newDiv.appendChild(newLine);
    newDiv.appendChild(resetButton);
    newDiv.classList.add("popup");
    document.body.appendChild(newDiv);
  }

  function winPopup() {
    const newDiv = document.createElement("div");
    const lose = document.createTextNode(`You Win :) `);
    const line = document.createElement("br");
    const answer = document.createTextNode(`The answer is ${word}`);
    const newLine = document.createElement("br");

    newDiv.appendChild(lose);
    newDiv.appendChild(line);
    newDiv.appendChild(answer);
    newDiv.appendChild(newLine);
    newDiv.appendChild(resetButton);
    newDiv.classList.add("popup");
    document.body.appendChild(newDiv);
  }

  const array1 = [];
  let wrongs = 0;
  const guessed = document.querySelectorAll(".guess span");
  const letter = document.querySelectorAll(".letter");
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
              array1.push(span.innerHTML);
            }
            // console.log(span);
            // console.log(array1);
            if (array1.length == array.length) {
              winPopup();
            }
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
          letters.classList.add("finish");
        }
      } else {
        document.getElementById("correct").play();
      }
    }
  });

  function reset() {
    console.log("reset ppp");
    document.querySelector(".head").style.display = "none";
    document.querySelector(".body").style.display = "none";
    document.querySelector(".right-arm").style.display = "none";
    document.querySelector(".left-arm").style.display = "none";
    document.querySelector(".right-leg").style.display = "none";
    document.querySelector(".left-leg").style.display = "none";
    document.querySelector(".popup").style.display = "none";
    letter.forEach((btn) => {
      btn.classList.remove("clicked");
    });
    letters.classList.remove("finish");

    guessed.forEach((x) => {
      x.innerHTML = "";
    });
  }
  resetButton.addEventListener("click", reset);

  // const answer = [];
  // for (let i = 0; i < word.length; i++) {
  //   answer[i] = "_";
  // }

  // for (let i = 0; i < word.length; i++) {
  //   if (word[i] === letter) {
  //     answer[i] = letter;
  //   }
  // }
}

window.addEventListener("DOMContentLoaded", init);
