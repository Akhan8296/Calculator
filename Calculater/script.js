const display = (input) => {
  let presDispValue = document.getElementById("count").value;
  document.getElementById("count").value = presDispValue + input;
}
const calculate = () => {
  let disp = document.getElementById("count").value;
  let exp = disp.replace(/÷/g,"/").replace(/x/g,"*");
  let result = eval(exp);
  document.getElementById("count").value = result;
}
function clearDisplay() {
  document.getElementById("count").value = "";
}