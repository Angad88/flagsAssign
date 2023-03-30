
async function fetchMeUserInfo() {
    let data = await fetch('https://restcountries.com/v3.1/all');
    let dataWithJSON = await data.json();
    let finalOutputArray = dataWithJSON;

    createUI(finalOutputArray);

}


function createUI(finalOutputArray) {


    let container = document.querySelector('#maincontainer');


    for (let i = 0 ; i < finalOutputArray.length; i++) {

        let cardElement = document.createElement("div");
        cardElement.classList.add("card");

        let img = document.createElement("img");
        img.src = finalOutputArray[i].flags.png;
        img.classList.add("countryImg");


        cardElement.appendChild(img);

        let contentInfo = document.createElement('div');

        let name = document.createElement('p');
        name.textContent = `Country Name: ${finalOutputArray[i].name.common}`;

        contentInfo.appendChild(name);


        let population = document.createElement('p');
        population.textContent = `Population: ${finalOutputArray[i].population}`;

        contentInfo.appendChild(population);

        cardElement.appendChild(contentInfo);
        
        container.appendChild(cardElement);
        console.log(finalOutputArray[i].id);
    }

}

fetchMeUserInfo();

