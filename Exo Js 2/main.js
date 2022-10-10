//ET et OU
let x = 10;
let y = 9;

// OU (OR)
if (x == 10 || y == 5){
    console.log(true)
}
else{
    console.log(false);
}

// ET (AND)
if (x == 10 && y == 5){
    console.log(true)
}
else{
    console.log(false);
}

// OU exculsif (XOR)
if(x == 10 ^ y == 5){
    console.log(true)
}
else{
    console.log(false);
}

//NAND
if (x != 10 && y != 9){
console.log(true)
}
else{
    console.log(false);
}

// 1)Bonnes pratiques

// A chaque changement de bloc { } il est indispensable de faire un TAB (indentation)

// Si une une fonction retourne quelques choses elle doit commencer par :

// Si elle un BOOL par IS.... HAS...

// Le nom d'une fonction doit toujours refleter ce qu'elle fait.

// Une fonction doit toujours ne faire qu'une seule chose à la fois.


// 2) NULL and Undefined

let nl = null
console.log(nl)

let element = document.getElementById('paul');
console.log(element);

//Undefined

let k;

console.log(k);

if (k === undefined){
    k = 12;
}
console.log(k);

//button
// let button = document.getElementsByClassName('exempleA')

// function myclick(){
//     console.log("j'ai cliquer sur le bouton");
// }

// button[0].addEventListener('click' , myclick)

let button = document.getElementsByClassName('exempleA')

// button[0].addEventListener('click', function(){
//     console.log("j'ai cliqué sur le bouton.")
// })

button[0].addEventListener('click', function(event){
    console.log("j'ai cliqué sur le bouton.")
    console.log(event);
})

let inputText = document.getElementById('exempleB')

inputText.addEventListener('input', function(){
    console.log('ok')
})

//AJAX
var buttonimage = document.getElementById("send");
var image = document.querySelector("img");

buttonimage.addEventListener('click',function(){
     var ajax =new XMLHttpRequest();
     ajax.open('GET','https://api.thecatapi.com/v1/images/search', true);
     ajax.responseType = 'json';
     ajax.send()
     ajax.onload = function() {
         console.log(this.response[0].url);
         image.src= this.response[0].url;
     }
 });
// buttonimage.addEventListener('click',function(){
//     fetch("https://api.thecatapi.com/v1/images/search")
//     .then(response => image.src = response.url)
// })

//fonction fléchées
function add(nbrA, nbrB){
    console.log(nbrA + nbrB)
}


const arrowAdd = (nbrA, nbrB) => {
    console.log(nbrA + nbrB)
}

add(5, 6);
arrowAdd(5, 7)

var addArray =[1, 2, 4, 5];

var addArrayTwo = [5, 7, 12, 4]

const mapArray = addArray.map(x => x + 1)
console.log(mapArray);

const mapArrayTwo = addArray.map((x, i) => x + addArrayTwo[i]);
console.log(mapArrayTwo);

addArrayTwo.forEach(x => console.log(x))

const zeroArray = [5, 3, 8, 10];

function hasZero(element ){
    if(element >= 4){

     return true
    }
    else{
        return false
    }
}



zeroArray.every(hasZero)

console.log(zeroArray.every(hasZero));