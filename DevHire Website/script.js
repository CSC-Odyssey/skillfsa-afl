document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired!");

    var toggleButton = document.getElementById("myButton");
    toggleButton.addEventListener('click', hideDiv);

    var getDataButton = document.getElementById("myButton2");
    getDataButton.addEventListener('click', getData);

    function hideDiv() {
        var myDiv = document.getElementById("html-square");
        if (myDiv.style.display !== "none"){
            myDiv.style.display = "none";
            // console.log("none")
        } else {
            myDiv.style.display = "block";
            // console.log("ye")
        }
    }

    function getData() {
        console.log("getData event fired!");
        fetch('../pdf/result.json')
            .then(response => response.json())
            .then(data => {
                data.results.forEach(item => {
                    console.log(item.name);
                });
            })
            .catch(error => console.error(error));
    }
}); 