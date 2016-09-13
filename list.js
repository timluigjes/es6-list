//Show all existing items on the page
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.length === 0) {
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        addToPage(localStorage.getItem(i));
    }
}, false);

//Add event listener for button
let button = document.querySelector('button');
button.addEventListener('click', addItem, true);

function addItem() {
    //Get value
    let textInput = document.querySelector('#listInput').value;

    //Add to storage
    let key = localStorage.length;
    localStorage.setItem(key, textInput);

    //Add to page
    addToPage(textInput);
}

function addToPage(text) {
    let listItem = document.createElement('div');

    let listitemChild = document.createElement('p');
    listitemChild.textContent = text;
    listItem.appendChild(listitemChild);

    document.querySelector('main').insertBefore(listItem, document.querySelector('#listInput'));
}