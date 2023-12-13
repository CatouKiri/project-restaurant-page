const content = document.querySelector("#content");

function header() {
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');

  header.innerHTML = "this is a header";
  h1.innerHTML = "this is an h1";
  button1.innerHTML = "this is a button";
  button2.innerHTML = "this is another  button";

  header.appendChild(h1);
  header.appendChild(button1);
  header.appendChild(button2);

  return header;
}

function footer() {
  const element = document.createElement('footer');

  element.innerHTML = "this is a footer";

  return element;
}

document.body.insertBefore(header(), document.body.firstChild);
document.body.appendChild(footer());
