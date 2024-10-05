let screen = document.getElementById("screen");
function showonscreen(input) {
  screen.value += input;
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (error) {
    screen.value = " Error";
  }
}
let clears = document.getElementById ('clear')
clears.onclick = function clear() {
    screen.value = "";
  }

