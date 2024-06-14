<?php
//leggo il file json dal disco
$filecontent = file_get_contents("dati.json");

//controllo di avere il necessario per creare una nuova Task
if (isset($_POST["titolo"]) && isset($_POST["done"])) {

    //converto il json in un array associativo php
    $toDoList = json_decode($filecontent, true);

    //creo una nuova Task
    $newTask = [
        "titolo" => $_POST["titolo"],
        "done" => false
    ];

    //pusho la task appena creata nel mio array
    $toDoList[] = $newTask;

    //converto tutto l'array in un json
    $fileContent = json_encode($toDoList, JSON_PRETTY_PRINT);

    //scrivo il json su disco
    file_put_contents("dati.json", $fileContent);
}

//Setto l'header
header('Content-Type: application/json');

//restituisco il nuovo json con il contenuto aggiornato del file
echo $fileContent;
