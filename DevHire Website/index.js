const form = document.getElementById("resume-form");
const uploadLabel = form.querySelector("#upload-label");
const fileNameLabel = document.getElementById("file-name");
const errorMessage = document.getElementById("error-message");

const fileInput = form.querySelector("#resume-upload");
fileInput.addEventListener("change", function() {
  const file = fileInput.files[0];
  if (!file) {
    uploadLabel.innerText = "UPLOAD";
    fileNameLabel.innerText = "";
    errorMessage.innerText = "No file uploaded";
    return;
  }
  uploadLabel.innerText = "CHANGE";
  fileNameLabel.innerText = file.name;
  errorMessage.innerText = "";
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const file = fileInput.files[0];
  
  if (!file) {
    errorMessage.innerText = "No file uploaded";
    return;
  }
  
  // Code to handle file upload here
  console.log(file);
});

form.addEventListener("reset", function(event) {
  uploadLabel.innerText = "UPLOAD";
  fileNameLabel.innerText = "";
  errorMessage.innerText = "";
});