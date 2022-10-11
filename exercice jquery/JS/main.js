//  recuperer le boutton
//  stocker les données de l'élève
//  stocker les élèves
//  stocker toutes les notes de élèves

//  à partir de maintenant on click

//  verification des données


// si les données sont bonnes on fait =>

//  on met les informations des élèves dans un tableau
//  on met la note de lélève dans un tableau
//  on met le tableau dans le tableau qui stocke les élèves
//  si elles ne sont pas bonnes on fait =>

//  on retourne un message d'erreur

$(document).ready(function(){
    var btn = $("#btn");
    var studient = [];
    var allStudients = [];
    var mean = [];

    $("#error").hide();

    btn.click(function(){
        let inputNbr = parseInt($("#mean").val());
        if (inputHasNotThisValue('', $("#firstName")) && inputHasNotThisValue('', $("#name")) && inputNbr >= 0 && inputNbr <= 20) {
            studient.push($("#firstName").val(), $("#name").val(), inputNbr);
            allStudients.push(studient);
            mean.push(inputNbr);
            tableUpdate();
            valueReset();
            //calcMoyenne(res);
            if(allStudients.length > 1){
                $("#meanClass").html(meanClass())
            }
        }
        else
        {
            $('#error').show().fadeOut(5000);
            valueReset();
        }
    })

    function inputHasNotThisValue(valuecheck, input){
        if(input.val() != valuecheck){
            return true;
        }else{
            return false;
        }
    }
    function tableUpdate() {
        $("#tableau .trRemove").remove();
        allStudients.forEach(element => $("#tableau").append("<tr class ='trRemove'><td>" + element[0] + "</td><td class='trRemove' >" + element[1] + "</td><td class='trRemove'>" + element[2] + "</td><tr>"))
    }
    function valueReset() {

        studient =[];
        $("#firstName").val('')
        $("#name").val('')
        parseInt ($("#mean").val(0))
    }
    //function calcMoyenne(res){
    //     let b = mean.length;
    //     for(let i = 0; i < b; i++){
    //         res = res + mean[i];
    //     }
    //     moyenne = res / b;
    //     $("#meanClass").html(moyenne);
    //     console.log(mean);
    // }
    let tab =[1, 2, 3, 4, 5]

    function meanClass(){
        var meanNote = mean.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        return meanNote / mean.length;
    }
})
