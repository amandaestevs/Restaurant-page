import createMenu from "./menu";

export default function createHome() {
  const mainContainer = document.querySelector(".main-content");
  mainContainer.innerHTML = "";

  const homePage = document.createElement('div');
  homePage.classList.add('home-page');
  mainContainer.append(homePage)

  createAbout()
  createHours()
  createButton()
}

function createAbout(){
  const homePage = document.querySelector('.home-page');

  const welcomeMessageContainer = document.createElement('div');
  welcomeMessageContainer.classList.add('message-container');
  homePage.append(welcomeMessageContainer)

  const messageTitle = document.createElement('h2');
  messageTitle.textContent = "Welcome to Coffee Times";
  welcomeMessageContainer.append(messageTitle)

  const messageParagraph = document.createElement('p');
  messageParagraph.textContent = "Come try the best coffee in the city. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  welcomeMessageContainer.append(messageParagraph)

  const homeImage = document.createElement('img');
  homeImage.setAttribute('src', 'img/home-image.jpg');
  homePage.append(homeImage)
}

function createHours(){
  const homePage = document.querySelector('.home-page');

  const hours= document.createElement('div');
  hours.classList.add('hours');
  homePage.append(hours);
  
  const hoursTitle = document.createElement('h2');
  hoursTitle.textContent = "Hours";
  hours.append(hoursTitle)

  const hoursText = document.createElement('div');
  hoursText.innerHTML = `<div class="time"><div>Weekdays:</div><span>7AM-7PM</span></div><div class="time"><div>Weekends:</div><span>10AM-6PM</span></div>`;
  hours.append(hoursText)
}

function createButton() {
  const homePage = document.querySelector('.home-page');
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('home-button');
  homePage.append(buttonContainer);

  const buttonElement = document.createElement('button');
  buttonElement.innerText = `Order Now`;
  buttonContainer.append(buttonElement);
  
  buttonElement.addEventListener('click', ()=> {
    document.querySelector('.home').classList.remove('active');
    document.querySelector('.menu').classList.add('active');
    createMenu()
  })
}