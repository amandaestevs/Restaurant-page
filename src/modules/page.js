export default function loadPage() {
  createHeader()
  createMain()
  createFooter()
}

const container = document.getElementById('content');

function createHeader(){
  const headerElem = document.createElement('div');
  headerElem.classList.add('header')
  container.append(headerElem);
  
  const name = document.createElement('h1');
  name.classList.add('name');
  name.textContent = 'Coffee Times';
  headerElem.append(name);

  const nav = document.createElement('div');
  nav.classList.add('nav');
  nav.innerHTML = `<ul>
  <li class="link home active"><a href="#">Home</a></li>
  <li class="link menu"><a class="menu" href="#">Menu</a></li>
  <li class="link contact"><a href="#">Contact</a></li>
  </ul>`;
  headerElem.append(nav)
}

function createFooter(){
   const footerElem = document.createElement('footer');
   footerElem.innerHTML = '<div>Created by amandaestevs <a href="https://github.com/amandaestevs" target="_blank"><img src="img/github-brands.svg"></a></div>';
   container.append(footerElem);
}

function createMain(){
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-content');
  container.append(mainContainer);
}