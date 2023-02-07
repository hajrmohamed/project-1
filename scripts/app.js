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

  // const letters = [
  //   "a",
  //   "b",
  //   "c",
  //   "d",
  //   "e",
  //   "f",
  //   "g",
  //   "h",
  //   "i",
  //   "j",
  //   "k",
  //   "l",
  //   "m",
  //   "n",
  //   "o",
  //   "p",
  //   "q",
  //   "r",
  //   "s",
  //   "t",
  //   "u",
  //   "v",
  //   "w",
  //   "x",
  //   "y",
  //   "z",
  // ];

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
  });

  const audio = new Audio("soundsclick.mp3");
  const buttons = document.querySelectorAll(".letters");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });

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
          });
        }
      });

      if (status !== true) {
        // add sound
        wrongs++;
        hangman.classList.add(`w${wrongs}`);
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
}
window.addEventListener("DOMContentLoaded", init);
