<?php include("../DevHire Website/indexHandler.php");
?>

<!DOCTYPE html>
<html>
  <head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      .left {
        background-color: #15232C;
        height: 100vh;
        width: 50%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 90px;
        color: #B05454;
        font-family: "DotGothic16", monospace;
        box-sizing: border-box;
        padding: 0 20px;
        font-weight: bolder;
        font-style: italic;
        letter-spacing: 10px;
      }
      .left p:last-child {
        color: #D9D9D9;
      }
      .right {
        background-color: #D9D9D9;
        height: 100vh;
        width: 50%;
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "DotGothic16", monospace;
        font-size: 15px;
        color: #15232C;
        font-weight: lighter;
        box-sizing: border-box;
        padding: 0 160px;
        text-align: justify;
        line-height: 1.8;
        letter-spacing: 1px;
      }
      .button {
        background-color: #B05454;
        color: #D9D9D9;
        border: none;
        border-radius: 10px;
        font-size: 25px;
        font-family: "DotGothic16", monospace;
        padding: 10px 160px;
        margin-top: 20px;
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
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,700,700i">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=VT323">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap">

  </head>
  <body>
	<div class="left">
	  <p><span style="color: #B05454; font-size: 60px;">//</span><span style="color: #B05454;">Dev</span><span style="font-weight: lighter; letter-spacing: .2px;">Hire</span></p>
	</div>
	<div class="right">
	  <p>
		DevHire is a powerful tool for recruiters and hiring managers that automates 
		the process of screening resumes for technical skills. Our advanced algorithm 
		quickly identifies candidates with expertise in HTML, CSS, and JavaScript, saving you
		time and effort in your search for the perfect hire. With DevHire, you can streamline 
		your recruitment process and find the most qualified candidates in record time.
	  </p>
	  <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
		<form id="resume-form" action="#">
		  <label for="resume-upload" class="button" id="upload-label">UPLOAD</label>
		  <p id="file-name" style="margin-left: 10px;"></p>
		  <input type="file" id="resume-upload" name="resume" accept=".pdf" style="display:none">
		  <button type="submit" class="button">SUBMIT</button>
		</form>
	  </div>
	  <p id="error-message" style="color:red; margin-top: 5px;"></p>
	</div>
	<script src="../DevHire Website/index.js"></script>
	<script src="../DevHire Website/script.js"></script>
</body>
</html>
