const content = document.querySelector("#content");

function header() {
  const element = document.createElement('header');

  element.innerHTML = "this is a header";

  return element;
}

function footer() {
  const element = document.createElement('footer');

  element.innerHTML = "this is a footer";

  return element;
}

document.body.insertBefore(header(), document.body.firstChild);
document.body.appendChild(footer());
