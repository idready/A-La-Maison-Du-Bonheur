
<?php

  ini_set("SMTP","smtp.live.com");

  if(isset($_POST['boot-proof'])) {

    $name = htmlentities( strip_tags($_POST['user-name']) );
    $firstName = htmlentities( strip_tags($_POST['user-first-name']) );
    $email = htmlentities( strip_tags($_POST['user-email']) );
    $subject = htmlentities( strip_tags($_POST['user-subject']) );
    $message = htmlentities( strip_tags($_POST['user-text-message']) );

    var_dump($email);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

      echo 'Email invalide, merci de modifier votre email.';
      return false;
    }

    $to = 'dude72@hotmail.fr';
    $body = '<!doctype html><html><head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Message depuis alamaisondubonheur.fr</title>
      </head>
      <body>
        <p>Information sur l\'exp&eacute;diteur du message</p>
        <p>Nom: '.$name.'</p>
        <p>Pr&eacute;nom: '.$firstName.'</p>
        <p>Email: '.$email.'</p>
        <p>Son message:<br /><br /> '.$message.'</p>
      </body>
      </html>
      ';

    $headers = "From: ".$email." \r\n";
    $headers .= "Reply-To: ". strip_tags(''.$to) . "\r\n";
    $headers .= "CC: ". $to . "\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

    if( mail($to, $subject, $body, $headers) ) {

      echo 'Message envoyé avec succès';
    } else {

      echo 'Message non envoyé, merci de réessayer.';
    }



  } else {

    echo 'Failure';
  }
?>
