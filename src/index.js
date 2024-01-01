import './style.css';

const content = document.querySelector("#content");
function header() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  const button3 = document.createElement('button');

  h1.innerHTML = "JOLLYNASAL";
  button1.innerHTML = "HOME";
  button2.innerHTML = "MENU";
  button3.innerHTML = "CONTACT";

  header.appendChild(h1);
  header.appendChild(buttonContainer);
  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(button2);
  buttonContainer.appendChild(button3);

  return header;
}

function footer() {
  const element = document.createElement('footer');

  element.innerHTML = "this is a footer";

  return element;
}

document.body.insertBefore(header(), document.body.firstChild);
document.body.appendChild(footer());
