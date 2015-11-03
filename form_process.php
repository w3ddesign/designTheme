<?php
	$name = $_POST['name'];
	$company = $_POST['company'];
	$city = $_POST['city'];
	$phone = $_POST['phone'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	$to = "";

	mail($to, $company, $phone, $city, $message, "From: " . $name);
	echo "Tu mensaje se ha enviado";
?>