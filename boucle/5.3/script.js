let nombre = prompt("Entrez un nombre");
let i = 0;

nombre = Number(nombre);

if (isNaN(nombre)){
    alert("Vous n'avez pas entré un nombre");
}else{
    while(i<10){
        console.log(nombre + i);
        i++;
    }
}