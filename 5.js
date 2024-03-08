/* 
5. Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência 
ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

*/


function invertString(word){
    let newString = "";
    
    for(i = word.length - 1; i >= 0 ; i--){
        newString += word[i];
    }

    console.log(newString);
}

let word = "ademir";

invertString(word);
