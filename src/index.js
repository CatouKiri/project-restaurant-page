import './style.css';
import contactPage from './contact.js';
import menuPage from './menu.js';

const content = document.querySelector("#content");

function createButton(text, id, clickHandler) {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.setAttribute("id", id);
    button.addEventListener('click', clickHandler);
    return button;
}

function header() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    h1.innerHTML = "SIRENAS BUNTOT";

    const home = createButton("HOME", "home", () => disableAndLoad(homePage, home));
    const menu = createButton("MENU", "menu", () => disableAndLoad(menuPage, menu));
    const contact = createButton("CONTACT", "contact", () => disableAndLoad(contactPage, contact));

    header.appendChild(h1);
    header.appendChild(buttonContainer);
    buttonContainer.append(home, menu, contact);

    return header;
}

function main() {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    const h2 = document.createElement('h2');
    h2.innerHTML = "BEST SEAFOOD IN THE COUNTRY";

    main.appendChild(h2);
    return main;
}

function homePage() {
    const main = document.getElementById('main');
    main.textContent = "";

    const h2 = document.createElement('h2');
    h2.innerHTML = "BEST SEAFOOD IN THE COUNTRY";

    main.appendChild(h2);
}

function footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = "Copyright © 2024 Ed Benedict Quia";
    return footer;
}

function disableAndLoad(pageFunction, clickedButton) {
    const buttons = document.querySelectorAll('button');
    pageFunction();
    buttons.forEach(button => {
        button.disabled = (button === clickedButton);
    });
}

content.appendChild(header());
content.appendChild(main());
content.appendChild(footer());
