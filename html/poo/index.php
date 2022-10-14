<?php 

spl_autoload_register(function($class) {
    include $class .".php";
});
    

$voiture = new Voiture();
$voiture -> setNbrRoue(6);

$personne = new Personne(170, 45);
$personneDeux = new Personne(180, 56);
$personneTrois = new Personne();

$rectangle = new Rectangle(4, 5);


// Ne jamais changer de variable de cette manière $voiture -> carburantType = "Essence";

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <h1 class="center"> POO : programmation orienté objet </h1>
    <h2><?php echo $voiture -> carburantType ?></h2>
    <h2><?php echo $voiture -> information(); ?></h2>
    <h2><?php echo $voiture -> getNbrRoue(); ?></h2>

    <h2><?php // echo $voiture -> puissanceMoteur ne peux pas le lire car attribut en privée ?></h2>
    <hr>
    <h2><?php echo $personne -> information(); ?></h2>
    <h2><?php echo $personneDeux -> information(); ?></h2>
    <h2><?php echo $personneTrois -> information(); ?></h2>
    <hr>
    <h2><?php echo $rectangle -> information(); ?></h2>
    
</body>
</html>




