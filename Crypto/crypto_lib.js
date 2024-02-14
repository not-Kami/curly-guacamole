// Partie 1 : What are words worth ?
// Déclarer et implémenter une fonction what_are_words_worth() qui demande une
// entrée à l’utilisateur, calcule sa longueur (nombre de caractère qui la compose) et puis
// qui demande à l'utilisateur de confirmer le nombre de lettres de ce mot.
// La fonction renvoie le booléen true si la longueur est validée par l'utilisateur, sinon
// elle renvoie false
// Pour lire une entrée de l'utilisateur :
// var valeur_entree = prompt(message);
// Pour demander une confirmation :
// confirm(message);

function what_are_words_worth() {
    let phrase = prompt('Entrez votre phrase');
    let message = 'votre entrée ' + phrase + ' fait ' + phrase.length + ' caractère(s)'

    return confirm(message);
}


// Partie 2 : Count Wordula
// Déclarer et implémenter une fonction count_words(string_of_words) qui prend
// en paramètre une phrase et qui retourne le nombre de mots dans cette phrase. Pour se
// faire, on suppose que les mots de la phrases ne sont séparés que par des espaces et
// ne contiennent aucun caractères de ponctuation.
// Ex :
// counter = count_words('Turing believes machines think');
// console.log(counter) ; // affiche 4

function count_words(sentence){
    let i = 0;
    let count = 0;
    let last_char = sentence.charAt(0)
    while(i<sentence.length){
        if(sentence.charAt(i)==' ' && last_char != ' ' ){
            ++count;
        }
        last_char = sentence.charAt(i);
        ++i;
    }
    return count + 1;
}
