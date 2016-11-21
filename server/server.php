<?php
$container = require_once("config.php");

$servername = $container["database"]["serverName"];
$dbname = $container["database"]["dbName"];
$username = $container["database"]["userName"];
$password = $container["database"]["password"];

try 
{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}