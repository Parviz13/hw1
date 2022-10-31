let numContainer = document.getElementById("num");
let value = 0;
let btnInc = document.querySelector(".inc");
let btnDec = document.querySelector(".dec");
let btnReset = document.querySelector(".reset");
btnInc.addEventListener("click", () => {
  value++;
  numContainer.textContent = value;
});
btnDec.addEventListener("click", () => {
  value--;
  numContainer.textContent = value;
});
btnReset.addEventListener("click", () => {
  value = 0;
  numContainer.textContent = value;
})
function Random (){ 
  const max = 100;
  return Math.round(Math.random() * max );
 }
 
 const btn = document.getElementById('button');
 const div = document.getElementById('num');
 
 btn.onclick = function() {
   div.innerHTML = Random();
 }
 