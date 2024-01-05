import sushi1 from './imgs/sushi.jpg';
import sushi2 from './imgs/sushiWithRedSauce.jpg';
import sushi3 from './imgs/sushiWithOrangeToppings.jpg';
import sushi4 from './imgs/sushiWhiteAndRedSaucewithLeaves.jpg';

export default function menuPage() {
    const main = document.getElementById('main');
    main.textContent = "";

    const h1 = document.createElement('h1');
    // const menuItemContainer = document.createElement('div');
    // const img = document.createElement('img');
    // const p = document.createElement('p');

    h1.innerHTML = "Menu";
    main.appendChild(h1);

    const menuItemContainer1 = createMenuItemContainer();
    const img1 = createImage(sushi1);
    const p1 = createParagraph('sushi');
    main.appendChild(menuItemContainer1);
    menuItemContainer1.appendChild(img1);
    menuItemContainer1.appendChild(p1);


    return main;
  }

  function createMenuItemContainer() {
    const div = document.createElement('div');
    return div;
  }

  function createImage(url) {
    const img = document.createElement('img');
    img.setAttribute("id","menuItem");
    img.src = url;

    return img;
  }

  function createParagraph(text) {
    const p = document.createElement('p');
    p.innerHTML = text;

    return p;
  }