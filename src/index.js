import './style.css';
import contactPage from './contact.js';

const content = document.querySelector("#content");

function header() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');
  h1.innerHTML = "SIRENAS BUNTOT";

  let home = createButton("HOME");
  home.setAttribute("id","home");
  // home.addEventListener('click', e => {
  //   printMe();
  //   home.disabled = true;
  // })

  let menu = createButton("MENU");
  menu.setAttribute("id","menu");

  let contact = createButton("CONTACT");
  contact.setAttribute("id","contact");
  contact.addEventListener('click', e => {
    contactPage();
    contact.disabled = true;
  })

  header.appendChild(h1);
  header.appendChild(buttonContainer);
  buttonContainer.appendChild(home);
  buttonContainer.appendChild(menu);
  buttonContainer.appendChild(contact);

  return header;
}

function createButton(text) {
  const button = document.createElement('button');
  button.innerHTML = text;

  return button;
}

function main() {
  const main = document.createElement('main');
  main.setAttribute('id','main');
  main.innerHTML = "BEST SEAFOOD IN THE COUNTRY";

  return main;
}

function footer() {
  const footer = document.createElement('footer');
  footer.innerHTML = "Copyright © 2024 Ed Benedict Quia";

  return footer;
}

content.appendChild(header());
content.appendChild(main());
content.appendChild(footer());

