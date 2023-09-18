const input = document.querySelector('.input')
const button = document.querySelector('.button')

button.addEventListener('click', () => {
    if (input.classList.contains('w-[32px]')){
        input.classList.remove('w-[32px]')
        input.classList.add('w-[200px]')
        button.classList.add('translate-x-[127px]')
    } else {
        input.classList.remove('w-[200px]')
        button.classList.remove('translate-x-[127px]')
        input.classList.add('w-[32px]')
    }
})