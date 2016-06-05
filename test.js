var i = 0;

function createGraphNode(event) {
  i++;
  var node = document.createElement("DIV");

  var att1 = document.createAttribute("id");
  att1.value = i;
  node.setAttributeNode(att1);

  var att2 = document.createAttribute("class");
  att2.value="full-circle";
  node.setAttributeNode(att2);

  node.style.position = "absolute";
  node.style.top = event.clientY-15+"px";
  node.style.left = event.clientX-15+"px";

  document.getElementById("graph").appendChild(node);
}
document.addEventListener("click", createGraphNode);
