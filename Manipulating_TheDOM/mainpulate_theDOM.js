document.getElementById("myId");
document.getElementsByClassName("myClass");
document.getElementsByTagName("p");
document.querySelector(".myClass"); // returns first match
document.querySelectorAll("div");   // returns all matches

// Change text
document.getElementById("demo").textContent = "Welcome!";

// Change HTML
document.getElementById("demo").innerHTML = "<strong>Welcome!</strong>";

// Change style
document.getElementById("demo").style.color = "blue";

// Adding content in Div
const newDiv = document.createElement("div");
newDiv.textContent = "New content!";
document.body.appendChild(newDiv);

// Using for Removing Element
// const element = document.getElementById("demo");
// element.remove(); // Removes the element

// Function creating to adding content OnClick
function changeText() {
  document.getElementById("text").textContent = "You clicked the button!";
}

// Toggle content
function toggleBox() {
  const box = document.getElementById("box");
  box.style.display = box.style.display === "none" ? "block" : "none";
}
