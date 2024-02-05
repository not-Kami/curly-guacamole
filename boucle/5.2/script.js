
let nombre = document.getElementById("nombre");
let button = document.getElementById("button");
let message = " le nombre est trop ";


button.addEventListener("click", function() {
while (nombre < 10 || nombre > 20 || isNaN(nombre) {
    nombre = Number(prompt("Entrez un nombre compris entre 10 et 20"));
    if (nombre < 10) {
        alert(message +  "petit");
    } else if (nombre > 20) {
        alert(message + "grand");
    } else {
        alert("Le nombre est ok");
    }
}});