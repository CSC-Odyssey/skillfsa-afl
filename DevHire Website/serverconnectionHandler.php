<?php

$host = "localhost";
$user = "root";

$accept = false;

$con = new mysqli($host, $user);
if($con->connect_error) {
    die("Failed to connect : " .$con->connect_error);
} 
  
?>