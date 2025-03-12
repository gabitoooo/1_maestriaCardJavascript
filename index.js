// Obtener elementos del DOM
const verDetallesButton = document.getElementById("verDetallesButton");
const volverButton = document.getElementById("volverButton");
const tarjeta = document.querySelector(".tarjeta");
const frontal = document.querySelector(".frontal");
const posterior = document.querySelector(".posterior");


verDetallesButton.addEventListener("click",()=>{
     frontal.style.transform=" rotateY(180deg)";
     posterior.style.transform=" rotateY(0deg)";
});
volverButton.addEventListener("click",()=>{
    posterior.style.transform=" rotateY(180deg)";
     frontal.style.transform=" rotateY(0deg)";
});

