<?php 
class Voiture
{
    private $nbrRoue = 4;
    private $puissanceMoteur = 90;
    public $carburantType = "Diesel";
    
    public function information(){
        echo "c'est une voiture à " . $this -> nbrRoue ." roues, elle a un moteur de " . $this -> puissanceMoteur . " chevaux.";
    }

    public function getNbrRoue(){
        return $this -> nbrRoue;
    }
    public function setNbrRoue($nbrRoue){
        $this -> nbrRoue = $nbrRoue;
    }
}
?>