<?php

$toDoList = [
    ['titolo' => "fare la spesa", 'done' => false],
    ['titolo' => "fare la benzina", 'done' => false],
    ['titolo' => "andare in palestra", 'done' => false],
    ['titolo' => "fare il pranzo", 'done' => false],
    ['titolo' => "fare il bucato", 'done' => true],
];

header('Content-Type: application/json');

$jsonString = json_encode($toDoList);

echo $jsonString;
