/*
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function(text){
    return text.length;
}

var replaceLetter = function (text) { 
    return text.replace('e', ' ');
}


var toConcatenate = function (text) { 
    // return (text +' Pepita');
    return text.concat(' Pepita');
}

var fifthLetter = function (text) {
    return text[4];
}

var nineLetters = function (text) {
    // return text.slice(0, 9);
    return text.substring(0,9); // substring() ne peut pas accepter les index négatifs
}

var bigLetters = function (text) {
    return text.toUpperCase();
}

var smallLetters = function (text) {
    return text.toLowerCase();
}

var cancelSpace = (text) => {
    return text.split(' ').join('');
} 

var trueOrFalse = function isString(text) {
    if (typeof text === 'string')
    return true;
}

var showExtension = (filename) => {
    return filename.split('.').pop();
}

var howManySpace = (text) => {
    return text.split(' ').length - 1;

}

var reverseLetters = (text) => {
    /*
    split(): cette méthode divisera la chaîne en un tableau de caractères.
    reverse(): cette méthode inverse tous les éléments d’un tableau.
    join(): Cette méthode joint tous les éléments du tableau pour créer une chaîne de caractères.
    */
    return text.split('').reverse().join('');
}