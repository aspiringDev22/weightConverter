const kgInput = document.getElementById("kgInput");
const gramsOut = document.querySelector(".gramsOut");
const poundsOut = document.querySelector(".poundsOut");
const ouncesOut = document.querySelector(".ouncesOut");

kgInput.addEventListener("input", (e) => {
  //   console.log(123);
  let kgs = e.target.value;
  //   console.log(kgs);
  gramsOut.innerHTML = (kgs * 1000).toFixed(2);
  poundsOut.innerHTML = (kgs * 2.204).toFixed(2);
  ouncesOut.innerHTML = (kgs * 35.274).toFixed(2);
});
