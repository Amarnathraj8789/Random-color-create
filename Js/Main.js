const body1 = document.body;
const BtnEl = document.getElementById("Btn");

function Randomcolor(){
  const red = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const blue = Math.floor(Math.random()*256);
  const Color = `rgb(${red},${green},${blue})`;
  return Color;
}

BtnEl.addEventListener("click",()=>{
    const backgrund = Randomcolor();
    body1.style.backgroundColor = backgrund;
})