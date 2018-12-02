<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['subject'])     ||
   empty($_POST['message'])){
       echo "No arguments Provided!";
       return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$toTanguy = 'tvillegeorges@gmail.com';
$toVal = 'valentin.durand0@gmail.com';
$toGuim = 'guillemettedlv@gmail.com';

$email_subject = "[BeLoad] Message de:  $name";

$email_body = "Salut Beload,\n\n".
              "On a recu un message via le site. Voici les détails:\n\n
Email: $email_address\n\n
Sujet: $subject\n\n
Message: $message";

$headers = "From: noreply@beload.com\n";

$headers .= "Reply-To: $email_address";

mail($toTanguy,$email_subject,$email_body,$headers);
mail($toVal,$email_subject,$email_body,$headers);
mail($toGuim,$email_subject,$email_body,$headers);

return true;
?>