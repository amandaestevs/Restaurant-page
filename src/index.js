import loadPage from "./modules/page"
import createMenu from "./modules/menu"
import createHome from "./modules/home"
import createContact from "./modules/contact"

loadPage()
loadContent()

function loadContent(){
    let currentTab = document.querySelector('.active');
    if (document.querySelector('.active').classList.contains('menu')) {
      createMenu()
    } else if (currentTab.classList.contains('home')){
        createHome()
    } else if (currentTab.classList.contains('contact')) {
        createContact()
    }
}

const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', () =>{
        if (document.querySelectorAll('.active').length != 0) {
            document.getElementsByClassName('active')[0].classList.remove('active');
        }
    link.classList.add('active');
    loadContent()
    })
})