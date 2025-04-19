<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $nachricht = htmlspecialchars($_POST["message"]);

    $eintrag = "Name: $name\nE-Mail: $email\nNachricht: $nachricht\n---\n";

    file_put_contents("nachrichten.txt", $eintrag, FILE_APPEND);

    echo "<h2>Vielen Dank für deine Nachricht!</h2><p><a href='index.html'>Zurück zur Startseite</a></p>";
} else {
    header("Location: kontakt.html");
    exit();
}
?>
