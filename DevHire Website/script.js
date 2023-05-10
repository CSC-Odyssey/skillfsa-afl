document.addEventListener("DOMContentLoaded", function() {
    // console.log("DOMContentLoaded event fired!");
    // var toggleButton = document.getElementById("myButton");
    // toggleButton.addEventListener('click', hideDiv);

    var getDataButton = document.getElementById("myButton2");
    getDataButton.addEventListener('click', getData());
    getDataButton.style.display = "none";

    // function hideDiv() {
    //     var myDiv = document.getElementById("html-square");
    //     if (myDiv.style.display !== "none"){
    //         myDiv.style.display = "none";
    //     } else {
    //         myDiv.style.display = "block";
    //     }
    // }

    function getData() {
        console.log("getData event fired!");

        const blockElement = document.querySelector('#block-element');
        fetch('../pdf/result.json')
            .then(response => response.json())
            .then(data => {
                data.results.forEach(item => {
                    const htmlString = {
                        template: `
                            <div class="title">
                              <div class="title-container">
                                <p>\${item.name}</p>
                                <p>\${item.email}</p>
                              </div>
                              <div class="square-container">
                                <div id="html-square"class="square" style="background-color: #418BD0;"></div>
                                <div id="css-square" class="square" style="background-color: #D04197;"></div>
                                <div id="js-square" class="square" style="background-color: #D07541;"></div>
                              </div>
                            </div>
                        `
                        };
                    const newHTML = htmlString.template.replace(/\${item.name}/g, item.name).replace(/\${item.email}/g, item.email);

                    const container = document.createElement('article');
                    container.classList.add('block');
                    container.classList.add('block-width');
                    container.innerHTML = newHTML;

                    blockElement.insertAdjacentElement('beforeend', container);
                });
            })
            .catch(error => console.error(error));
    }
}); 