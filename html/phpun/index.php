<?php 

$bonjour = 'bonjour';

$nbrA = 4;
$nbrB = 5;
$nbrC= $nbrA + $nbrB;
$variableNull = NULL;
$undefined;

if(!isset($undefined)){
    $undefined = 120;
}
if(empty($variableNull)){
    echo "cette variable est vide ";
}
//empty verifie si la variable est egale à 0  ou   0.0  ou  "0"  ou  "" ou  NULL  ou  FALSE  ou  array()

$array = [1, 2, 3, 1, 'tony'];
$associativeArray = ["Jean-marc" => 4, "Alphonse" => 6];
$associativeArray["Jean-marc"] = "Kevin";
$cacher = false;

var_dump('coucou');
var_dump($array);
var_dump($associativeArray);
var_dump($variableNull);

echo $undefined;

$fruits =['Pomme','Banane', 'Pêche', 'Fraise'];
$voitures = array('Dacia', 'Ford', 'Citroën');
var_dump($fruits);
var_dump($voitures);


for ($i = 0; $i < 50; $i++){
    echo $i . '<br>';
}
//superglobale
var_dump($_SERVER["SERVER_NAME"]);
var_dump($_POST);
var_dump($_GET);
var_dump($_FILES);
var_dump($GLOBALS);
var_dump($_SESSION);
var_dump($_COOKIE);
var_dump($_ENV);
?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>PHP</title>
</head>
<body>
    <h1> <?php echo $bonjour; ?></h1>
    <h2> <?php echo $nbrA . ' + ' . $nbrB . ' = ' . $nbrC; ?> </h2>
    <h2> <?php echo $associativeArray["Jean-marc"]?> </h2>
    <h2> <?php echo implode(' ', $associativeArray) ?> </h2>
    <h2> <?php echo $nbrA == 4 ? "c'est un nombre 4" : "c'est pas un nombre 4." ;?> </h2>
    <h2> <?php echo $nbrA == 5 ? "c'est un nombre 4" : "c'est pas un nombre 4." ;?> </h2>
    <p class='<?php echo $cacher ? "cacher" : "" ; ?>'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta repellendus ea ex blanditiis sunt hic possimus cupiditate veritatis commodi corrupti. Aut magni dolore voluptates ut itaque omnis voluptatibus quibusdam odio. </p>

</body>
</html>
