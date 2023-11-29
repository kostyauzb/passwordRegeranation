const kodalar = [
  "PTx1f5DaFX",
  "X2f5aFPDTX",
  "DaPTX1FX5",
  "5FXaPTX1D",
  "X1DaFX5PT",
  "PT5FX1aDX",
  "DaX5PTf1X",
  "fPTDXa5X1",
  "X1f5DPTaF",
  "FX1DaPT5X",
];

const rendomSoz = document.querySelector(".header_title");
const rendomBtn = document.querySelector(".btn_gen");
const almashSoz = document.querySelector(".medium");
const divEl = document.querySelector(".toldiruvchi");
const chekbox1 = document.querySelector(".chek_inp1");
const chekbox2 = document.querySelector(".chek_inp2");
const chekbox3 = document.querySelector(".chek_inp3");
const chekbox4 = document.querySelector(".chek_inp4");

function app() {
  const randomIndex = Math.floor(Math.random() * kodalar.length);
  const random = kodalar[randomIndex];
  rendomSoz.textContent = random;
}
rendomBtn.addEventListener("click", app);

if (divEl.children.length >= 4) {
  const div1 = divEl.children[0];
  const div2 = divEl.children[1];
  const div3 = divEl.children[2];
  const div4 = divEl.children[3];

  function app2() {
    if (chekbox1.checked && div1) {
      almashSoz.textContent = "TOO WEAK!";
      div1.style.backgroundColor = "red";
    } else {
      div1.style.backgroundColor = "";
    }
    if (chekbox2.checked && div2) {
      almashSoz.textContent = "WEAK";
      div1.style.backgroundColor = "#FB7C58";
      div2.style.backgroundColor = "#FB7C58";
    } else {
      div2.style.backgroundColor = "";
    }
    if (chekbox3.checked && div3) {
      almashSoz.textContent = "MEDIUM";
      div1.style.backgroundColor = "#F8CD65";
      div2.style.backgroundColor = "#F8CD65";
      div3.style.backgroundColor = "#F8CD65";
    } else {
      div3.style.backgroundColor = "";
    }
    if (chekbox4.checked && div4) {
      almashSoz.textContent = "STRONG";
      div1.style.backgroundColor = "#A4FFAF";
      div2.style.backgroundColor = "#A4FFAF";
      div3.style.backgroundColor = "#A4FFAF";
      div4.style.backgroundColor = "#A4FFAF";
    } else {
      div4.style.backgroundColor = "";
    }
  }

  chekbox1.addEventListener("click", app2);
  chekbox2.addEventListener("click", app2);
  chekbox3.addEventListener("click", app2);
  chekbox4.addEventListener("click", app2);
} else {
  console.error("Not enough children in divEl.");
}
