<?php
class Rectangle
{
    private $longueur;
    private $largeur;

    public function __construct($longueur = 5, $largeur = 3){
        $this -> perimetre = (($longueur + $largeur)*2);
        $this -> surface = ($longueur * $largeur);
    }

    public function information(){
        echo "C'est un rectangle de périmètre " . $this -> perimetre . " et de surface " . $this -> surface . "m²" ;
    }

    public function getPerimetre(){
        return $this -> perimetre;
    }
    public function getSurface(){
        return $this -> surface;
    }
}

?>