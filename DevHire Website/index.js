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

  // Step 2: Read the contents of the uploaded PDF file using FileReader
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);

  // Step 3: Extract information from the PDF using pdf.js library
  reader.onload = function() {
    const arrayBuffer = reader.result;
    pdfjsLib.getDocument(arrayBuffer).promise.then(function(pdf) {
      const pageNumber = 1; // assuming that the information is on the first page
      pdf.getPage(pageNumber).then(function(page) {
        page.getTextContent().then(function(textContent) {
          const text = textContent.items.map(function(item) {
            return item.str;
          }).join('');

          // Step 4: Extract the required information from the text using regular expressions
          const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}\b/i;
          const skillsetPattern = /([\s\S]*)/;
          const emailMatch = text.match(emailPattern);
          const skillsetMatch = text.match(skillsetPattern);
          const email = emailMatch ? emailMatch[0].trim() : "N/A";
          let skillset = skillsetMatch ? skillsetMatch[1].toLowerCase().split(/[  ,/|]+/) : [];
          skillset = skillset.filter((skill) => ['html', 'javascript', 'css'].includes(skill.replace(/[^a-zA-Z]/g, '').toLowerCase()));
          skillset = skillset.map((skill) => skill.replace(/[^a-zA-Z]/g, ''));
         

          if (!emailMatch || skillset.length === 0) {
            errorMessage.innerText = "Data not found";
            return;
          }

          // Step 5: Populate the result in result.json
          const results = {
            email: email,
            skillset: Array.from(new Set(skillset))
          };
          const jsonData = JSON.stringify({results: [results]});
          const xhr = new XMLHttpRequest();
          xhr.open("POST", "../DevHire Website/indexHandler.php", true);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onload = function() {
            if (xhr.status === 200) {
              window.location.href = "results.php";
            }
          };
          xhr.send(jsonData);
        });
      });
    });
  };
});

form.addEventListener("reset", function(event) {
  uploadLabel.innerText = "UPLOAD";
  fileNameLabel.innerText = "";
  errorMessage.innerText = "";
});