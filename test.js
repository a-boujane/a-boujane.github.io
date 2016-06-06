var i = 0;

function createGraphNode(event) {
  i++;

  var node = document.createElement("DIV");

  var att = document.createAttribute("id");
  att.value = i;
  node.setAttributeNode(att);

  att = document.createAttribute("class");
  att.value="full-circle";
  node.setAttributeNode(att);

  var childNode = document.createElement("div");

  att = document.createAttribute("class");
  att.value="nodeText";

  childNode.setAttributeNode(att);
  childNode.textContent = i;

  node.appendChild(childNode);

  node.style.position = "absolute";
  node.style.top = event.clientY-15+"px";
  node.style.left = event.clientX-15+"px";

//  node.textContent = i;

  document.getElementById("graph").appendChild(node);
}


document.addEventListener("click", createGraphNode);
