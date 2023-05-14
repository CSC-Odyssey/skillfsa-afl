<?php 
include("../DevHire Website/process.php"); 
?>
<!DOCTYPE html>
<html>
<head>
	<script src="../DevHire Website/script_test.js"></script>
  <script src="../DevHire Website/script.js"></script>
	<style src="style.css"></style>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=VT323">
</head>
<body>
  <div class="header">List of Employees</div>
  <main id="block-element" class="block-list centered">

  <!-- CATEGORIES -->
  <section class="block-category block-width">
    <p style="color: #ffffff;" class="title">Name</p>
    <p style="color: #ffffff;" class="title">Email</p>
    <div class="square-container">
      <p style="color: #418BD0;">HTML</p>
      <p style="color: #D04197;">CSS</p>
      <p style="color: #D07541;">JS</p>
    </div>	
  </section>

      <article class="block block-width">
    <div class="title">
      <div class="title-container">
        <p>Brian Duncan</p>
        <p>briandunc@mail.com</p>
      </div>
      <div class="square-container">
        <div id="tick-mark-blue"></div>
        <div id="tick-mark-pink"></div>
        <div id="tick-mark-orange"></div>
      </div>
    </div>
  </article>
  </main>
<button id="myButton2">Click Me!</button>
</body>
</html>