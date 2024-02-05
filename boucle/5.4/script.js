let nombre = parseInt(prompt("Choisissez un nombre dont vous voulez voir la table de multiplication"));
let i = 1;

if (isNaN(nombre)){
    alert("Vous n'avez pas entré un nombre");
}
else{
    while(i<=10){
        console.log(nombre + " x " + i + " = " + nombre*i);
        i++;
    }
}