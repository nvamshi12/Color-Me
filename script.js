let allDivs = document.querySelectorAll(".coloring");

let parentContainer = document.querySelector(".parent-container");
let buttonsDiv = document.querySelector(".buttons");
let keepChangingColors = document.querySelector(".keep-changing-colors");
let stillColor = document.querySelector(".still-color");
console.log(allDivs);

function randomNumGenerator() {
  const randomNum = Math.floor(Math.random() * 255 + 1);
  console.log(randomNum);
  return randomNum;
}

function randomColorGenerator() {
  document.querySelector(".div-1").style.backgroundColor = `rgb(
${randomNumGenerator()},
   ${randomNumGenerator()},
    ${randomNumGenerator()}
  )`;
}

const html = `
<h1>🫟 Color Me 🫟</h1>
 <h3>Color the animals by tapping on the tiles below 🎨 🖌️</h3>
    <div class="buttons">
      <button class="still-color">Color them for me</button>
      <button class="keep-changing-colors">Keep coloring them</button>
    </div>
<div class="parent-container">
  <!-- Mammals & insertions -->
  <div class="div-1 coloring">🐕</div>
  <div class="div-2 coloring">🐈</div>
  <div class="div-3 coloring">🐇</div>
  <div class="div-4 coloring">🐿️</div>
  <div class="div-5 coloring">🐢</div>    <!-- tortoise -->
  <div class="div-6 coloring">🦋</div>    <!-- butterfly -->
  <div class="div-7 coloring">🐒</div>
  <div class="div-8 coloring">🦍</div>
  <div class="div-9 coloring">🦧</div>
  <div class="div-10 coloring">🦥</div>
  <div class="div-11 coloring">🦦</div>
  <div class="div-12 coloring">🦝</div>
  <div class="div-13 coloring">🦨</div>
  <div class="div-14 coloring">🦫</div>
  <div class="div-15 coloring">🐻</div>
  <div class="div-16 coloring">🐼</div>
  <div class="div-17 coloring">🐨</div>
  <div class="div-18 coloring">🐯</div>
  <div class="div-19 coloring">🦁</div>
  <div class="div-20 coloring">🐅</div>
  <div class="div-21 coloring">🐆</div>
  <div class="div-22 coloring">🐺</div>
  <div class="div-23 coloring">🐗</div>
  <div class="div-24 coloring">🐃</div>
  <div class="div-25 coloring">🐄</div>
  <div class="div-26 coloring">🦬</div>
  <div class="div-27 coloring">🐂</div>
  <div class="div-28 coloring">🦙</div>
  <div class="div-29 coloring">🐏</div>
  <div class="div-30 coloring">🐑</div>
  <div class="div-31 coloring">🐐</div>
  <div class="div-32 coloring">🦌</div>
  <div class="div-33 coloring">🐎</div>
  <div class="div-34 coloring">🐖</div>
  <div class="div-35 coloring">🐪</div>
  <div class="div-36 coloring">🐫</div>
  <div class="div-37 coloring">🐘</div>
  <div class="div-38 coloring">🦏</div>
  <div class="div-39 coloring">🦛</div>
  <div class="div-40 coloring">🦓</div>
  <div class="div-41 coloring">🦒</div>
  <div class="div-42 coloring">🦘</div>

  <!-- Birds -->
  <div class="div-43 coloring">🐥</div>
  <div class="div-44 coloring">🐔</div>
  <div class="div-45 coloring">🐓</div>
  <div class="div-46 coloring">🪿</div>
  <div class="div-47 coloring">🦆</div>
  <div class="div-48 coloring">🦢</div>
  <div class="div-49 coloring">🦩</div>
  <div class="div-50 coloring">🐧</div>
  <div class="div-51 coloring">🕊️</div>
  <div class="div-52 coloring">🦅</div>
  <div class="div-53 coloring">🦉</div>
  <div class="div-54 coloring">🦃</div>
  <div class="div-55 coloring">🦜</div>
  <div class="div-56 coloring">🦚</div>
  <div class="div-57 coloring">🦤</div>

  <!-- Fish & Marine Mammals -->
  <div class="div-58 coloring">🐟</div>
  <div class="div-59 coloring">🐠</div>
  <div class="div-60 coloring">🐡</div>
  <div class="div-61 coloring">🐬</div>
  <div class="div-62 coloring">🐳</div>
  <div class="div-63 coloring">🐋</div>

  <!-- Invertebrates -->
  <div class="div-64 coloring">🐙</div>
  <div class="div-65 coloring">🦀</div>
  <div class="div-66 coloring">🐌</div>
  <div class="div-67 coloring">🐦‍🔥</div>
  <div class="div-68 coloring">🦄</div>
  <div class="div-69 coloring">🦕</div>

  <!-- Misc    -->
   <div class="div-70 coloring">🦭</div> 
   <div class="div-71 coloring">🦋</div> 
   <div class="div-72 coloring">🐝</div>

  </div>
<footer>Made by 💛amshi</footer>
`;

const mobileDeviceCheck = window.matchMedia("(max-width: 1000px)");

function handleDeviceChange(e) {
  if (e.matches) {
    console.log("This is a mobile device");
    document.querySelector("body").innerHTML = "";
    document.querySelector("body").innerHTML = html;
    parentContainer = document.querySelector(".parent-container");
    buttonsDiv = document.querySelector(".buttons");
    keepChangingColors = document.querySelector(".keep-changing-colors");
    stillColor = document.querySelector(".still-color");
    allDivs = document.querySelectorAll(".coloring");
  }
}
mobileDeviceCheck.addEventListener("change", handleDeviceChange);

handleDeviceChange(mobileDeviceCheck);

parentContainer.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("coloring")) {
    console.log(e.target);
    e.target.style.backgroundColor = `rgb(
${randomNumGenerator()},
   ${randomNumGenerator()},
    ${randomNumGenerator()}
  )`;
  }
});

// To prevent zooming on double-click / triple-click
let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 100) {
      e.preventDefault();
    }
    lastTouchEnd = now;
  },
  false
);
let timeInterval = null;

buttonsDiv.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.classList.contains("still-color")) {
    allDivs.forEach((div) => {
      console.log(div);
      div.style.backgroundColor = `rgb(
                          ${randomNumGenerator()},
                          ${randomNumGenerator()},
                          ${randomNumGenerator()} 
                          )`;
    });
  }
  if (e.target.classList.contains("keep-changing-colors")) {
    if (!timeInterval) {
      // color immediately without delay
      allDivs.forEach((div) => {
        console.log(div);
        div.style.backgroundColor = `rgb(
                          ${randomNumGenerator()},
                          ${randomNumGenerator()},
                          ${randomNumGenerator()} 
                          )`;
      });
      timeInterval = setInterval(() => {
        allDivs.forEach((div) => {
          console.log(div);
          div.style.backgroundColor = `rgb(
                            ${randomNumGenerator()},
                            ${randomNumGenerator()},
                            ${randomNumGenerator()} 
                            )`;
        });
      }, 1000);
    } else {
      clearInterval(timeInterval);
      timeInterval = null;
    }
  }
  if (!e.target.classList.contains("keep-changing-colors")) {
    clearInterval(timeInterval);
  }
});
