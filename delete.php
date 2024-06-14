<?php
//leggo il file json dal disco
$filecontent = file_get_contents("dati.json");

//controllo di avere il necessario per creare una nuova Task


//converto il json in un array associativo php
$toDoList = json_decode($filecontent, true);

if (isset($_POST["indice"])) {


    $indice = intval($_POST["indice"]);


    // elimino la tast con splice
    // array_splice($toDoList, $indice, 1);

    //elimino la task nel mio array con unset
    unset($toDoList[$indice]);
    // $reindex = array_values($toDoList);
    // $toDoList = $reindex;

    //converto tutto l'array in un json
    $fileContent = json_encode($toDoList, JSON_PRETTY_PRINT);

    //scrivo il json su disco
    file_put_contents("dati.json", $fileContent);
}



//Setto l'header
header('Content-Type: application/json');

//restituisco il nuovo json con il contenuto aggiornato del file
echo $fileContent;
