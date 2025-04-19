<?php
session_start();
if (!isset($_SESSION["eingeloggt"]) || $_SESSION["eingeloggt"] !== true) {
    header("Location: admin-login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Admin-Bereich</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <section class="contact">
    <h1>Empfangene Nachrichten</h1>
    <a href="logout.php">Logout</a>
    <pre style="white-space: pre-wrap;"><?php
      if (file_exists("nachrichten.txt")) {
          echo htmlspecialchars(file_get_contents("nachrichten.txt"));
      } else {
          echo "Noch keine Nachrichten vorhanden.";
      }
    ?></pre>
  </section>
</body>
</html>
