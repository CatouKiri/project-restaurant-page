export default function contactPage() {
    const main = document.getElementById('main');
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    // const p = document.createElement('p');

    main.textContent = "";

    h1.innerHTML = "Contact Us";

    // p.textContent = "The Owner +63912345678 theownersemail@gmail.com"


    let p1 = createParagraph("The Owner");
    let p2 = createParagraph("+63912345678");
    let p3 = createParagraph("theownersemail@gmail.com");

    main.appendChild(h1);
    main.appendChild(div);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    return main;
  }

  function createParagraph(text) {
    const p = document.createElement('p');
    p.innerHTML = text;

    return p;
  }