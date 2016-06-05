var i=3;
while (true) {
  print i;
}
function printMousePos(event) {
  document.body.textContent =
    "clientX: " + event.clientX +
    " - clientY: " + event.clientY;
}

document.addEventListener("click", printMousePos);
