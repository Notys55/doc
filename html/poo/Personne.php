<?php
class Personne
{
    private $age = 25;
    private $taille = 183;

    public function __construct($taille = 120, $age = 0){
        $this -> taille = $taille;
        $this -> age = $age;
    }

    public function information(){
        echo "C'est une personne de " . $this -> age . " ans et de taille " . $this -> taille . " cm.";
    }

    public function getAge(){
        return $this -> age;
    }
    public function setAge($age){
        $this -> age = $age;
    }

    public function getTaille(){
        return $this -> taille;
    }
    public function setTaille($taille){
        $this -> taille = $taille;
    }

}
?>