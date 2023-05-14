<?php 
include("resultsHandler.php"); 
?>

<!DOCTYPE html>
<html>
<head>
	<script src="results.js"></script>
	<script src="index.js"></script>
	<style src="style.css"></style>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=VT323">
	<a href="index.php"><button class="button">UPLOAD</button></a>
	<style>
		      .button {
        background-color: #B05454;
        color: #D9D9D9;
        border: none;
        border-radius: 5px;	
        font-size: 25px;
        font-family: "DotGothic16", monospace;
        padding: 10px 80px;
        margin-top: 20px;
		margin-left: 1150px;
        cursor: pointer;
        white-space: nowrap;
		letter-spacing: 5px;
		justify-content: center;
        align-items: center;
      }
      .button:hover {
        background-color: #D9D9D9;
        color: #B05454;
      }
	</style>
</head>
<body>
    <div class="header">List of Employees</div>
    <main id="block-element" class="block-list centered">

		<!-- CATEGORIES -->
		<section class="block-category block-width">
			<p style="color: #ffffff;" class="title">Email</p>
			<div class="square-container">
				<p style="color: #418BD0;">HTML</p>
				<p style="color: #D04197;">CSS</p>
				<p style="color: #D07541;">JS</p>
			</div>	
		</section>
    </main>
	<button id="myButton2">Click Me!</button>
</body>
</html>


