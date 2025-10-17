<?php
use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    $mail = new PHPMailer(true);

    try {
       
       $mail->isSMTP();
       $mail->Host = 'mail.nobitour.com';
       $mail->SMTPAuth = true;
       $mail->Username = 'hotelnobi@nobitour.com';
       $mail->Password = 'ZbgE]fRk57vH';
       $mail->SMTPSecure = 'ssl';
       $mail->Port = 465;


        // Sender and recipient
        $mail->setFrom('hotelnobi@nobitour.com', 'Nobi Hotel');
        $mail->addAddress('petrosyanlilit895@gmail.com');
        $mail->addReplyTo($email, $name); // optional: reply to user

        // Email content
        $mail->isHTML(false); // or true if sending HTML
        $mail->Subject = 'New message from Nobi Hotel website';
        $mail->Body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        $mail->send();
        header("Location: contacts.html?success=1");
    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
    exit;
} else {
    header("Location: contacts.html?error=invalid_request");
    exit;
}