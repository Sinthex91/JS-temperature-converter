function toCelsius() {
  var c = (document.getElementById("userInput").value - 32 * 5) / 9;
  parseFloat(c);
  document.getElementById("result").innerHTML =
    userInput.value + " Fahrenheit sind " + Math.round(c) + " Grad Celsius.";
}

function toFahrenheit() {
  var f = (document.getElementById("userInput").value * 9) / 5 + 32;
  parseFloat(f);
  document.getElementById("result").innerHTML =
    userInput.value + " Grad Celsius sind " + Math.round(f) + " Fahrenheit.";
}
