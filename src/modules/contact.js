export default function createContact() {
  const mainContainer = document.querySelector(".main-content");
  mainContainer.innerHTML = "";

  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');
  mainContainer.append(contactContainer) 

  createContactUs()
  createAddress()
}

function createContactUs(){
  const contactContainer = document.querySelector('.contact-container');
  const contactUs = document.createElement('div');
  contactUs.classList.add('contact-us');
  contactContainer.append(contactUs)
  
  const contactUsTitle = document.createElement('h2');
  contactUsTitle.textContent = "Contact Us";
  contactUs.append(contactUsTitle)

  const contactContent = document.createElement('div');
  contactContent.classList.add("contact-content");
  contactContent.innerHTML = `<div class="contact-div"><img src="img/phone-solid.svg"><div>444-444-444</div></div>
  <div class="contact-div"><img src="img/at-solid.svg"><div>fakeemail@notreal.com</div></div>`
  contactUs.append(contactContent)
}

function createAddress(){
  const contactContainer = document.querySelector('.contact-container');
  const address = document.createElement('div');
  address.classList.add('address');
  contactContainer.append(address)

  const addressTitle = document.createElement('h2');
  addressTitle.textContent = "Address";
  address.append(addressTitle)

  const addressContent = document.createElement('div');
  addressContent.innerHTML = `<div><img src="img/location-dot-solid.svg"><div>Fake Address, 123</div></div>`;
  address.append(addressContent)
}
