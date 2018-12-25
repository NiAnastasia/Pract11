let canvas = document.querySelector(".myCanvas"),
context = canvas.getContext("2d"),
number = Math.floor(Math.random() * (1001 - 1) + 1),
size = Math.floor(Math.random() * (73 - 1) + 1),
fontSize = "italic " + size + "px Arial";

console.log(number);
console.log(fontSize);

context.font = fontSize;
context.fillText(number, 20, 50);