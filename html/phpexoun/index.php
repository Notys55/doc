<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exo php 1</title>
</head>
<body>
    <h1>Exo php 1</h1>
    <p>Avec l'aide de la documentation de PHP Faites moi une fonction PHP qui prend comme argument une string et un index et qui permet de retourner ou d'afficher cette string avec une majuscule à l'index choisi si l"index est superieur à la longueur de cette string la fonction prendra la derniere lettre de la string elle peut retourner en var dump ou echo function nom ($argument)</P>
    <?php 
    

    function upperChar($string, $i){
        if ($i >= strlen($string)){
            $i = strlen($string) - 1;
        }
        $string[$i] = strtoupper($string[$i]);
        echo $string;
           
    }
    
    upperChar("bonjour",4);
    ?>
</body>
</html>