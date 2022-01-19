<?php

$host = 'localhost';
$username = 'root';
$password = '';
$db_name = 'login';
$con = mysqli_connect($host, $username , $password , $db_name);
$resultset = mysqli_query($con , "SELECT * FROM fridge");
$json_array = array();
while($row = mysqli_fetch_assoc($resultset))
{
$json_array[] = $row;
}
echo"<pre>";
print_r($json_array);
echo"<pre>";
?>

