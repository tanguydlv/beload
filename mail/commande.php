<?php
// Check for empty fields
if(empty($_POST['photo_name'])      ||
   empty($_POST['user_name'])     ||
   empty($_POST['email'])     ||
   empty($_POST['type'])     ||
   empty($_POST['size'])     ||
   empty($_POST['encadrement']))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$user_name = strip_tags(htmlspecialchars($_POST['user_name']));
$photo_name = strip_tags(htmlspecialchars($_POST['photo_name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$type = strip_tags(htmlspecialchars($_POST['type']));
$size = strip_tags(htmlspecialchars($_POST['size']));
$encadrement = strip_tags(htmlspecialchars($_POST['encadrement']));

// Create the email and send the message
$toTanguy = 'tvillegeorges@gmail.com';
$toVal = 'valentin.durand0@gmail.com';
$toGuim = 'guillemettedlv@gmail.com';

$email_subject = "[BeLoad] Commande de:  $user_name";

$email_body = "Salut Beload,\n\n".
              "On a recu une commande à traiter au plus vite. Voici les détails:\n\n
Nom: $user_name\n\n
Email: $email_address\n\n
Nom de la photo: $photo_name\n\n
Type d'impression: $type\n\n
Taille: $size\n\n
Encadrement: $encadrement";

$headers = "From: noreply@beload.com\n";

$headers .= "Reply-To: $email_address";

mail($toTanguy,$email_subject,$email_body,$headers);
mail($toVal,$email_subject,$email_body,$headers);
mail($toGuim,$email_subject,$email_body,$headers);

return true;
?>