let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function colorChange() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);

document.addEventListener("DOMContentLoaded", function() {
    css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";
})