const allDivs = document.querySelectorAll("div > div");
const parentContainer = document.querySelector(".parent-container");
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
