document.addEventListener("DOMContentLoaded", function() {
    var getDataButton = document.getElementById("myButton2");
    getDataButton.addEventListener('click', getData());
    getDataButton.style.display = "none";

    function getData() {
      console.log("getData event fired!");

      const blockElement = document.querySelector('#block-element');
      fetch('../pdf/result.json')
          .then(response => response.json())
          .then(data => {
              data.results.forEach(item => {
                let blue = '<div id="tick-mark-blue"></div>';
                let pink = '<div id="tick-mark-pink"></div>';
                let orange = '<div id="tick-mark-orange"></div>';

                if (!item.skillset.includes('HTML')) {
                  console.log("one")
                  blue = '<div id="tick-mark-blue" style="opacity: 0"></div>';
                }
                if (!item.skillset.includes('CSS')) {
                  console.log("two")
                  pink = '<div id="tick-mark-pink" style="opacity: 0"></div>';
                }
                if (!item.skillset.includes('JavaScript')) {
                  console.log("three")
                  orange = '<div id="tick-mark-orange" style="opacity: 0"></div>';
                }

                const htmlString = {
                    template: `
                        <div class="title">
                          <div class="title-container">
                            <p>\${item.name}</p>
                            <p>\${item.email}</p>
                          </div>
                          <div class="square-container">
                            ${blue}
                            ${pink}
                            ${orange}
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