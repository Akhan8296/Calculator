const display = (input) => {
  let presDispValue = document.getElementById("count").value;
  document.getElementById("count").value = presDispValue + input;
}
const calculate = () => {
  let disp = document.getElementById("count").value;
  try{
    let exp = disp.replace(/÷/g,"/").replace(/x/g,"*");
    document.getElementById("count").value = eval(exp);
  }catch{
    document.getElementById("count").value = "Error";
  }
}
function clearDisplay() {
  document.getElementById("count").value = "";
}