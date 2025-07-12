const allTiles = document.querySelectorAll(".tile");
const parentContainer = document.querySelector(".parent-container");
const resetBtn = document.querySelector(".reset");
const triesCount = document.querySelector(".tries-count");
const winnerText = document.querySelector(".winner");
const gameResultDiv = document.querySelector(".game-result");
const closeWindowMark = document.querySelector(".cross-mark");
const allAnimals = [
  "🦁",
  "🐅",
  "🐆",
  "🐻",
  "🐼",
  "🐈",
  "🐖",
  "🐕",
  "🐎",
  "🐂",
  "🐃",
  "🐐",
  "🐏",
  "🐪",
  "🦙",
  "🦒",
  "🦌",
  "🐘",
  "🦏",
  "🦛",
  "🐀",
  "🐿️",
  "🐇",
  "🦔",
  "🦇",
  "🦫",
  "🦘",
  "🦃",
  "🐓",
  "🐥",
  "🦆",
  "🦢",
  "🦩",
  "🦅",
  "🦉",
  "🦕",
  "🐦‍⬛",
  "🦚",
  "🐋",
  "🐬",
  "🦭",
  "🐟",
  "🐠",
  "🐡",
  "🐙",
  "🦀",
  "🐌",
  "🐝",
  "🐛",
  "🐜",
  "🦋",
  "🐞",
  "🦗",
  "🕷️",
  "🦂",
  "🦦",
  "🦨",
  "🦥",
];
let previousTile = [];
let clicks = 0;
let clicked = false;
let timeout;
let numberOfTries = 0;
parentContainer.addEventListener("click", function (e) {
  const tile = e.target;

  if (tile.classList.contains("tile")) {
    clicks++;
    console.log(tile.textContent);
    console.log(tile.dataset.animal);
    clicked = true;
    previousTile.push(tile);
    console.log(previousTile);
    if (clicks > 1) {
      if (previousTile.at(-1).dataset.id === previousTile.at(-2).dataset.id) {
        return;
      }
      numberOfTries++;
      triesCount.textContent = numberOfTries;
      flipTheTile(tile, previousTile);
    } else {
      displayAnimalAndTimeout(tile);
      numberOfTries++;
      triesCount.textContent = numberOfTries;
    }
  }
});

function flipTheTile(tile, previousTile) {
  tile.textContent = tile.dataset.animal; // show animal
  const guessed = checkGuessedCorrectly(tile, previousTile);
  console.log(guessed);

  if (!tile.classList.contains("flipped") && !guessed) {
    const comingFrom = `From Flip the tile`;
    displayAnimalAndTimeout(tile, comingFrom);
    console.log(tile.classList);
    console.log(guessed);
    console.log(timeout);
  } else if (guessed) {
    previousTile.at(-1).textContent = previousTile.at(-1).dataset.animal;
    previousTile.at(-2).textContent = previousTile.at(-2).dataset.animal;
    previousTile.at(-1).classList.add("flipped"); // add flipped class
    previousTile.at(-2).classList.add("flipped"); // add flipped class
    console.log(timeout);
    clearTimeout(timeout);
    if (checkIfWinner()) {
      gsap.fromTo(
        winnerText,
        { scale: 1 },
        {
          scale: 1.8,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut",
        }
      );
      winnerText.classList.remove("hidden");
      gameResultDiv.classList.remove("hidden");

      setTimeout(function () {
        gameResultDiv.classList.add("hidden");
      }, 5000);
      allTiles.forEach((tile) => {
        gsap.fromTo(
          tile,
          { scale: 1 },
          {
            scale: 1.8,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          }
        );
      });
    }
  }
  console.log(guessed);
  console.log(numberOfTries);
}

function checkGuessedCorrectly(tile, previousTile) {
  console.log(`THIS EXECUTED!`);
  console.log(previousTile.at(-1).textContent);
  console.log(previousTile.at(-2).dataset.animal);
  console.log(tile.textContent);
  console.log(tile.dataset.animal);

  if (
    previousTile.at(-1).dataset.animal === previousTile.at(-2).dataset.animal
  ) {
    console.log("Guessed correctly");
    gsap.fromTo(
      [previousTile.at(-1), previousTile.at(-2)],
      { scale: 1 },
      {
        scale: 3,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      }
    );

    return true;
  } else {
    return false;
  }
}

function checkIfWinner() {
  let allTilesArr = [...allTiles];
  const isWinner = allTilesArr.every((tile) => tile.textContent !== "");
  console.log(isWinner);
  return isWinner;
}
function displayAnimalAndTimeout(tile, comingFrom) {
  tile.textContent = tile.dataset.animal; // show animal
  // display animal and immediately hide
  timeout = setTimeout(() => {
    console.log(`ENTERED INTO TIMEOUT`);
    console.log(comingFrom);
    tile.textContent = "";
  }, 1000);
}
let randomNumArr = [];
insertAnimalsIntoRandomTiles();
function insertAnimalsIntoRandomTiles() {
  let randomIndexArr = [];
  const uniqArr = getUniqueRandomNumbers(allTiles.length); // get 30 count of unique num's to pick random tile.
  const randArrForAnimals = getUniqueRandomNumbers(allAnimals.length); // get animals array length of unique num's to p[ick random animals
  console.log(randArrForAnimals);

  let tileCount = 0; // insert animals in only 15 tiles
  let insertedAnimalsArr = []; // animals that's been inserted in 1st iteration for 15 tiles
  let insertedTiles = []; // animals inserted in 1st iteration for 15 tiles
  // pick random 15 tiles
  uniqArr.forEach((num, i) => {
    // insert animals in only 15 tiles
    if (tileCount < allTiles.length / 2) {
      allTiles[num].dataset.animal = allAnimals[randArrForAnimals[i]];
      insertedTiles.push(Number(allTiles[num].dataset.id) - 1);
      insertedAnimalsArr.push(allAnimals[randArrForAnimals[i]]);
      console.log(allTiles[num]);
      tileCount++;
    }
  });
  console.log(insertedTiles);
  console.log(insertedAnimalsArr);

  // tiles remaining after inserting into 15 tiles - 1st iteration
  const insertedTilesSet = new Set(insertedTiles);
  console.log(insertedTilesSet);
  let tilesIndexSet = new Set([...Array(allTiles.length).keys()]);
  console.log(tilesIndexSet);
  console.log(tilesIndexSet.symmetricDifference(insertedTilesSet));
  // tiles remaining after 1st iteration
  const tilesRemainingArr = [
    ...tilesIndexSet.symmetricDifference(insertedTilesSet),
  ];
  console.log(tilesRemainingArr);

  // insert exactly the same 15 animals into different tiles.
  tilesRemainingArr.forEach((num, i) => {
    allTiles[num].dataset.animal = insertedAnimalsArr[i];
  });
}

// Returns an array of UNIQUE random numbers with a specified length.
function getUniqueRandomNumbers(numbersRequired = allTiles.length / 2) {
  let randomNumArr = [];
  for (let i = 0; i < numbersRequired; i++) {
    const randomNum = Math.floor(Math.random() * numbersRequired);
    randomNumArr.push(randomNum);
  }
  let uniqArr = [...new Set(randomNumArr)];
  while (uniqArr.length !== Number(numbersRequired)) {
    const randomNum = Math.floor(Math.random() * numbersRequired);
    randomNumArr.push(randomNum);
    uniqArr = [...new Set(randomNumArr)];
  }
  console.log(uniqArr);
  return uniqArr;
}

resetBtn.addEventListener("click", function () {
  allTiles.forEach((tile) => {
    tile.textContent = "";
    tile.dataset.animal = "";
    tile.classList.remove("flipped");
    previousTile.length = 0;
    numberOfTries = 0;
    clicks = 0;
    triesCount.textContent = 0;
    winnerText.classList.add("hidden");
    gameResultDiv.classList.add("hidden");
  });
  insertAnimalsIntoRandomTiles();
});

closeWindowMark.addEventListener("click", function () {
  gameResultDiv.classList.add("hidden");
});
