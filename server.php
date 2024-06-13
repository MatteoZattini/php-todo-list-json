<?php

$toDoList = [
    ['titolo' => "fare la spesa", 'done' => true],
    ['titolo' => "fare la benzina", 'done' => true],
    ['titolo' => "andare in palestra", 'done' => true],
    ['titolo' => "fare il pranzo", 'done' => true],
    ['titolo' => "fare il bucato", 'done' => true],
];

header('Content-Type: application/json');

$jsonString = json_encode($toDoList);

echo $jsonString;
