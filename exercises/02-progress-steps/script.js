const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

console.log(circles)

let currentActive = 1
let changeWidth = 0

next.addEventListener('click', () => {
    currentActive++
    changeWidth = changeWidth + 200
    
    if (currentActive > circles.length && changeWidth > 600) {
        currentActive = circles.length
        changeWidth = 600
    } 
    update()
    console.log(changeWidth)
})

prev.addEventListener('click', () => {
    currentActive--
    changeWidth = changeWidth - 200
    

    if (currentActive < 1 && changeWidth < 0) {
        currentActive = 1
        changeWidth = 0
    } 
    update()
    console.log(changeWidth)
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('border-white')
            circle.classList.add('active')
        } else {
            circle.classList.remove('border-white')
            circle.classList.remove('remove')
        }
    })

    const actives = document.querySelectorAll('.active')
    // progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    if (changeWidth === 0) {
        progress.classList.add('w-0')
        progress.classList.remove('w-[266.67px]')
        console.log(progress)
    } else if (changeWidth === 200) {
        progress.classList.add('w-[266.67px]', 'bg-white')
        progress.classList.remove('w-[533.34px]', 'w-0')
        console.log(progress)
    } else if (changeWidth === 400) {
        progress.classList.add('w-[533.34px]', 'bg-white')
        progress.classList.remove('w-[266.67px]', 'w-[790px]')
        console.log(progress)
    } else if (changeWidth === 600) {
        progress.classList.add('w-[790px]', 'bg-white')
        progress.classList.remove('w-[533.34px]')
        console.log(progress)
    }
}