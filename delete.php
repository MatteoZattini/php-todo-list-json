<?php
//leggo il file json dal disco
$filecontent = file_get_contents("dati.json");

//controllo di avere il necessario per creare una nuova Task


    //converto il json in un array associativo php
    $toDoList = json_decode($filecontent, true);

    if (isset($_POST["indice"])){

        //elimino la task nel mio array
        unset($toDoList[$_POST["indice"]]);
    
        //converto tutto l'array in un json
        $fileContent = json_encode($toDoList, JSON_PRETTY_PRINT);
    
        //scrivo il json su disco
        file_put_contents("dati.json", $fileContent);
    }



//Setto l'header
header('Content-Type: application/json');

//restituisco il nuovo json con il contenuto aggiornato del file
echo $fileContent;