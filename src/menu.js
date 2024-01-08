import sushi1 from './imgs/sushi.jpg';
import sushi2 from './imgs/sushiWithRedSauce.jpg';
import sushi3 from './imgs/sushiWithOrangeToppings.jpg';
import sushi4 from './imgs/sushiWhiteAndRedSaucewithLeaves.jpg';

const menuItem = [
  {
    name: "sushi",
    imgSrc: sushi1
  },
  {
    name: "sushi with ketchup",
    imgSrc: sushi2
  },
  {
    name: "orange toppings sushi",
    imgSrc: sushi3
  },
  {
    name: "sushi with leaves",
    imgSrc: sushi4
  },
];

function displayMenuItem() {
  const wholeMenuContainer = document.createElement('div');

  for (const item of menuItem) {
    const menuItemContainer = document.createElement('div');

    const img = document.createElement('img');
    img.setAttribute("id", "menuItem");
    img.src = item.imgSrc;

    const p = document.createElement('p');
    p.innerHTML = item.name;

    menuItemContainer.appendChild(img);
    menuItemContainer.appendChild(p);
    wholeMenuContainer.appendChild(menuItemContainer);
  }

  return wholeMenuContainer;
}

export default function menuPage() {
  const main = document.getElementById('main');
  main.textContent = "";

  const h1 = document.createElement('h1');
  const wholeMenuContainer = displayMenuItem();

  h1.innerHTML = "Menu";
  main.appendChild(h1);
  main.appendChild(wholeMenuContainer);

  return main;
}
