<?php

include('../server.php');

$data = file_get_contents("php://input");
$data = json_decode($data);

$query = $conn->prepare('INSERT INTO event (title, startDate, startTime, endDate, endTime, creatorName, creatorEmail)VALUES(:title, :startDate, :startTime, :endDate, :endTime, :creatorName, :creatorEmail)');
try
{
    $query->execute(array(
        "title" => $data->title,
        "startDate" => $data->startDate,
        "startTime" => $data->startTime,
        "endDate" => $data->endDate,
        "endTime" => $data->endTime,
        "creatorName" => $data->creator->name,
        "creatorEmail" => $data->creator->email
    ));

    echo json_encode([
                "status"=>200,
                "textStatus"=> "OK"
            ]);

}
catch(PDOException $e)
{
    echo "Failed to add new event : " . $e->getMessage();
};


