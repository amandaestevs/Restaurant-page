export default function createMenu() {
  const mainContainer = document.querySelector(".main-content");
  mainContainer.innerHTML = "";
  const menuContainer = document.createElement("div");
  menuContainer.classList.add('menu-container');
  mainContainer.append(menuContainer);

  populateMenu()
}

function populateMenu(){
  const menu = document.querySelector('.menu-container');
  const menuTitle = document.createElement('h2');
  menuTitle.textContent = 'Menu';
  menuTitle.classList.add('menu-title');
  menu.append(menuTitle)

  const coffeeTitle = document.createElement('h3');
  coffeeTitle.classList.add('section-title');
  coffeeTitle.textContent = "Coffees";
  menu.append(coffeeTitle)

  populateCoffeeSection()

  const pastriesTitle = document.createElement('h3');
  pastriesTitle.classList.add('section-title');
  pastriesTitle.textContent = "Pastries";
  menu.append(pastriesTitle)

  populatePastriesSection()
}

function populateCoffeeSection(){
   const menu = document.querySelector('.menu-container');
   const sectionContainer = document.createElement('div');
   sectionContainer.classList.add('section-container');
   menu.append(sectionContainer)

   coffees.forEach(coffee =>{
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item');

    const name = coffee.name;
    const price = coffee.price;
    const img = coffee.img;

    itemContainer.innerHTML = `<img src="${img}">
    <div class="item-name">${name}</div>
    <div class="item-price">${price}</div>`

    sectionContainer.append(itemContainer)
   })
}

function populatePastriesSection(){
  const menu = document.querySelector('.menu-container');
  const sectionContainer = document.createElement('div');
  sectionContainer.classList.add('section-container');
  menu.append(sectionContainer)

  food.forEach(pastry =>{
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item');

    const name = pastry.name;
    const price = pastry.price;
    const img = pastry.img;

    itemContainer.innerHTML = `<img src="${img}">
    <div class="item-name">${name}</div>
    <div class="item-price">${price}</div>`

    sectionContainer.append(itemContainer)
   })
}

function itemFactory(name, price, img){
  return{name, price, img}
}

const food = []
const coffees = []

const latte = itemFactory('Latte', '$3.00', 'img/latte.jpg')
coffees.push(latte)

const icedLatte = itemFactory('Iced Latte', '$4.00', "img/iced-latte.jpg")
coffees.push(icedLatte)

const mocha = itemFactory('Mocha', '$4.00', 'img/mocha.jpg')
coffees.push(mocha)

const flatWhite = itemFactory('Flat White', '$4.00', 'img/flat-white.jpg')
coffees.push(flatWhite)

const croissant = itemFactory('Croissant', '$2.00', 'img/croissant.jpg')
food.push(croissant)

const pretzel = itemFactory('Pretzel', '$3.00', 'img/pretzel.jpg')
food.push(pretzel)

const donut = itemFactory('Donut', '$1.00', 'img/donut.jpg')
food.push(donut)

const macarons = itemFactory('Macarons', '$4.00', 'img/macarons.jpg')
food.push(macarons)