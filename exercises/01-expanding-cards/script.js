const panels = document.querySelectorAll('.panel')
const headers = document.querySelectorAll('.header')
console.log(panels[4])
// Panels //
panels.forEach(panel => {
    if (panel.classList.contains('active')) {
        panel.setAttribute('class', 'w-[80%] active')
    }
    
    panel.addEventListener('click', ()=> {
        removeActive()
        panel.classList.add('active')
        changeStyle()
        removeHeaderActive()
        panel.lastElementChild.classList.add('active')
        changeHeader()
        })
    })

const removeActive = () => {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
    
}
const changeStyle = () => {
    panels.forEach(panel => {
        if (panel.classList.contains('active')) {
            panel.setAttribute('class', 'w-[80%] active transition-all duration-700 ease-out  ') 
            panels[3].classList.add('max-[480px]:hidden')
            panels[4].classList.add('max-[480px]:hidden')
        } 
       
        else {
            panel.setAttribute('class', 'w-[5%] transition-all duration-700 ease-in ')
            panels[3].classList.add('max-[480px]:hidden')
            panels[4].classList.add('max-[480px]:hidden')
        
        }
    })
}
// Headers //
const removeHeaderActive = () => {
    headers.forEach(header => {
        header.classList.remove('active')
    })
}

const changeHeader = () => {    
    headers.forEach(header => {
        if(header.classList.contains('active')) {
            header.setAttribute('class', 'active opacity-100 absolute bottom-[7%] ml-8  text-2xl font-bold transition duration-500 ease-out delay-300 max-[480px]:text-xl')
        } else {
            header.setAttribute('class', 'opacity-0 absolute bottom-[7%] ml-8  text-2xl font-bold transition duration-300 ease-in max-[480px]:text-xl')
        }
    })
}


