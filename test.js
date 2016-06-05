
function printMousePos(event) {
  document.body.textContent =
    "clientX: " + event.clientX +
    " - clientY: " + event.clientY;
}
document.addEventListener("click", printMousePos);
