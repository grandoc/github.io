<<<<<<< HEAD
let myImage = document.querySelector('img');

myImage.addEventListener('click', function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
}

if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
}

myButton.addEventListener('click', function(){
    setUserName();
=======
let myImage = document.querySelector('img');

myImage.addEventListener('click', function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
}

if (!localStorage.getItem('nom')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
}

myButton.addEventListener('click', function(){
    setUserName();
>>>>>>> e092e74c0bc6cec91216a2a7d3c6e8ee7fb4e8f6
});