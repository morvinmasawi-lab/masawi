<?php



$conn = new mysqli("localhost","root","","studentdb");



if($conn->connect_error){

die("Connection failed");

}



$name = $_POST['name'];

$email = $_POST['email'];



$sql = "INSERT INTO users (name,email) VALUES ('$name','$email')";



if($conn->query($sql)){

echo "Registration successful";

}



$conn->close();



?>
