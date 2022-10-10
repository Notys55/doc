$(document).ready(function(){
console.log($(".titre"));

$(".titre").html("coucou");

//$("p:last").css('color','red')
$("p:last").css({'color':'red', 'background-color':'cyan'})

let nombre = $("#nbr")
$(nombre).change(function(){
    console.log($(nombre).val())
})

$('#add').click(function(){

	let result = parseInt($('#nbrA').val()) + parseInt($('#nbrB').val())
  $("#result").html(result);
})


let maj = $("#maj").html();

$('#maj').html(maj.toUpperCase());

$("#list").append("<li>Paul</li>")
let stagiaire = ["Kevin", "Eric", "Michael","Tony","Anthony","Manu","Renaud"];

for(let index = 0; index < stagiaire.length; index++){
    $("#list").append("<li>" + stagiaire[index] + "</li>")
    }

for(let index = stagiaire.length - 1; index >=0; index--){
    $("#list").append("<li>" + stagiaire[index] + "</li>")
    }
})
