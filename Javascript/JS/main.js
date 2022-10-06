console.log("Hello World");
let x = 1;
var y = 3;
console.log(x + y);
let c = 5;
const k = 10;
console.log(k-c);
let w = 9;
w = 10;
console.log(w);
const s = 10;
// s=78 impossible erreur bloque le code s=78 impossible de réasigner et quand il y a erreur impossible de faire la suite
console.log(x = y);
console.log(w / 2.5);
console.log(w / y);
console.log(w * y);
console.log(w % y);
//structures conditionnelles if=SI w est egale à k alors j'écris "bonjour" (pseudo-code)
if (k == w) {
    console.log("Bonjour");
} 
//if...(condition)...{...expression...}...Bloc de condition
//== -> condition d'égalité
//=== -> condition stricte d'égalité
console.log(55 + 'j');
let bonjour = "Salut";
let bonjour02 = "les gars";
console.log(bonjour + ' ' + bonjour02);
//condition non ...!=...
if (c != x){
    console.log(c+' '+"n'est pas égale à "+ x);
}
let bool = true;
bool = false;
console.log(bool);
console.log(!bool);
if (!bool) {
    console.log("bool est égale à false");
}
//else
if (!bool) {
    console.log("bool est égale à false")
}
else {
    console.log("true n'est pas égale à true");
}
//>ou<
if(w < c) {
    console.log("w est inférieur à c")
}
    else{
        console.log("w est supérieur à c");
    }
//>= ou <=
if (k <= w){
    console.log("k est inférieur ou égale à w")
}
else{
    console.log("k est supérieur à w");
}
//query selector
var titre = document.getElementsByClassName("titre");
console.log(titre);
//test titre
var secondTitle = document.getElementById("h2modifier");
secondTitle.innerHTML = "Bonjour";
let paragraphe = document.querySelector(".paragraphe");
console.log(paragraphe);
let parentImage = document.querySelector(".parentImage");
var image = document.createElement("img");
image.setAttribute("src","images/chat01.jpg");
parentImage.appendChild(image);
//fonction
function addition(nombreA , nombreB){
    let result = (nombreA + nombreB);
    console.log(result);
}

addition(1000,2000);
addition(2000,4000);

function soustraction(nombreA , nombreB){
    let result = (nombreA - nombreB);
    return(result);
}
let trueresult = soustraction(50 , 27);
console.log(trueresult);

//verifier la taille si superieur à 170 grand et si inferieur petit
let age =170;

function estCeQueJeSuisGrand(age){
    if (age <= 170){
        console.log("Je suis petit")
    }
    else{
        console.log("Je suis grand");
    }
}
estCeQueJeSuisGrand(age);



function aiJeUneDivisionSansReste(nombreA , nombreB){
    let result = (nombreA % nombreB)
    if (result == 0){
        console.log("j'ai une division sans reste")
    }
    else{
        console.log("J'ai une division avec reste");
    }
    
}
aiJeUneDivisionSansReste(10 , 5);

//var et let
let maVariable = 10;
maVariable = true;
console.log(maVariable);
//let maVariable =10;
//console.log(maVariable);
var newVariable = 12;
console.log(newVariable);
var newVariable = 15;
console.log(newVariable);

var maVariableVar = "george";
function jeTestMonLet(){
    let test = "joconde"
    var maVariableVar = "jeanpierre" 
    if (true){
        console.log(test);        
    }
}
jeTestMonLet();

function jeTestEncoreMonLet(){
    let test = "leonard de vinci"
    console.log(test);
}
jeTestEncoreMonLet();
console.log(maVariableVar);

function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // c'est une variable différente
      console.log(x);  // 71
    }
    console.log(x);  // 31
}
letTest();

function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // c'est la même variable !
      console.log(x);  // 71
    }
    console.log(x);  // 71
  }
varTest();

//switch
function testNombre(nombre){
    switch(nombre){
        case 0:
            console.log("je suis le nombre 0");
            break;
        case 1:
            console.log("Je suis le nombre 1");
            break;     
        case 2:
            console.log("Je suis le nombre 2");
            break;    
        case 3:
            console.log("Je suis le nombre 3");
            break;   
        default:
            console.log("Je suis strictement supérieur à 3");   
    }
}
testNombre(5);

//tableau
var myFirstArray = [];
var mySecondArray = [1, 2, 3, 4, "banane", 6, 7];
var un = mySecondArray[0];
console.log(1);
console.log(mySecondArray.length);
console.log(mySecondArray[3]+ mySecondArray[0]);
myFirstArray.push("Jeremy");
console.log(myFirstArray);
myFirstArray.push("kevin.B");
console.log(myFirstArray);
console.log(myFirstArray.pop())
myFirstArray.shift();
console.log(myFirstArray)
console.log(mySecondArray.indexOf("banane"));
mySecondArray.splice(1,1);
let banane = "une banane";
console.log(banane[5]);