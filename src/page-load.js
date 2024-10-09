import wineImg from "./wine.jpg"
import pubImg from "./pub.jpg"
import happyImg from "./kite.jpg"

function loadHomePage(){
    const content = document.getElementById('content');

    content.innerHTML = ''
    
    //create elements
    const headline = document.createElement('h1');
    const description = document.createElement('p');
    const image = document.createElement('img');

    headline.textContent = "Welcome To Moshico Bar";
    description.textContent = "We offer the greatest variation of beers in the entire middle east, we also have `Captain Morgan's` special apple cocktail so why not try it for only 50 shekels";
    image.src = wineImg;
    image.alt = "wine";
    const div = document.createElement('div');

    content.appendChild(div).appendChild(headline);
    content.appendChild(div).appendChild(description);
    content.appendChild(div).appendChild(image);
}

function loadMenu(){
    const content = document.getElementById('content');

    content.innerHTML = ''
    
    //create elements
    const headline = document.createElement('h1');
    const description = document.createElement('div');
    const image = document.createElement('img');

    headline.textContent = "Classic Menu"

    description.innerHTML = "Moshico Beer - 25 Shekels <br>" +
                              "Mantav Beer - 69 Shekels <br>" +
                              "Captain Morgan's special - 900 shekels <br>" +
                              "Moshico Burger - 50 shekels <br>";

    image.src = pubImg;
    image.alt = "beer"



    const div = document.createElement('div');

    content.appendChild(div).appendChild(headline);
    content.appendChild(div).appendChild(description);
    content.appendChild(div).appendChild(image);

}

function loadAboutUs(){
    const content = document.getElementById('content');

    content.innerHTML = ''
    
    //create elements
    const headline = document.createElement('h1');
    const description = document.createElement('p');
    const image = document.createElement('img');

    headline.textContent = "About Us"
    description.textContent = "We are a community oriented alchoholic distillery aimed for fans of Moshico all around the globe"
    image.src = happyImg;
    image.alt = "happiness";

    const div = document.createElement('div');

    content.appendChild(div).appendChild(headline);
    content.appendChild(div).appendChild(description);
    content.appendChild(div).appendChild(image);
}

export  {loadHomePage,loadMenu,loadAboutUs};