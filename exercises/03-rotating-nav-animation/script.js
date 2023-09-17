const menuButton = document.querySelector('.menu')
const closeButton = document.querySelector('.close')
const firstPage = document.querySelector('.firstPage')
const links = document.querySelectorAll('a')
const nav = document.querySelector('.nav')


menuButton.addEventListener("click", () => {
    menuButton.classList.add('hidden')
    closeButton.classList.remove('hidden')
    changeDisplay()
})

closeButton.addEventListener("click", () => {
    closeButton.classList.add('hidden')
    menuButton.classList.remove('hidden')
    changeDisplay()
})


const changeDisplay = () => {
    if (menuButton.classList.contains('hidden')) {
        firstPage.classList.remove('rotate-[0deg]', 'origin-top-left')
        firstPage.classList.add('-rotate-[15deg]', 'origin-top-left')
        for (i = 0; i < links.length; i++) {
            links[i].classList.add('translate-x-0')
        }
    } 
    else if (closeButton.classList.contains('hidden')) {
        firstPage.classList.remove('-rotate-[15deg]', 'origin-top-left')
        firstPage.classList.add('rotate-[0deg]', 'origin-top-left')
        for (i = 0; i < links.length; i++) {
            links[i].classList.remove('translate-x-0')
        }
    } 
}