

document.body.style.fontFamily = "Arial, sans-serif"; 

const nickname = document.getElementById('nickname'); 
const favorites = document.getElementById('favorites'); 
const hometown = document.getElementById('hometown');

nickname.innerHTML = "Alexander The Great"; 
favorites.innerHTML = "The Invasion of India"; 
hometown.innerHTML = "Pella, today's Postol";

const liElements = document.querySelectorAll('li'); 
liElements.forEach(element => {
    element.removeAttribute("class")
    element.setAttribute("class", "listItem");
    element.style.color = 'red'; 
})

