<?php
session_start();
if (isset($_SESSION["eingeloggt"]) && $_SESSION["eingeloggt"] === true) {
    header("Location: admin.php");
    exit();
}

$fehlermeldung = "";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $benutzer = $_POST["benutzer"];
    $passwort = $_POST["passwort"];

    // Login-Daten (hier änderbar)
    $korrekter_benutzer = "admin";
    $korrektes_passwort = "geheim123";

    if ($benutzer === $korrekter_benutzer && $passwort === $korrektes_passwort) {
        $_SESSION["eingeloggt"] = true;
        header("Location: admin.php");
        exit();
    } else {
        $fehlermeldung = "Falscher Benutzername oder Passwort.";
    }
}
?>
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Admin Login</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <section class="contact">
    <h1>Admin Login</h1>
    <?php if ($fehlermeldung): ?><p style="color:red;"><?= $fehlermeldung ?></p><?php endif; ?>
    <form method="POST">
      <input type="text" name="benutzer" placeholder="Benutzername" required />
      <input type="password" name="passwort" placeholder="Passwort" required />
      <button type="submit">Login</button>
    </form>
  </section>
</body>
</html>
