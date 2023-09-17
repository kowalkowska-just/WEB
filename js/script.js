// PROJECT 1 

const button = document.querySelector('.arrow')
const arrow = document.querySelector('.fa-arrow-down')
const item1 = document.querySelector('.item1')

function handleButton() {
    item1.classList.toggle('show')
    
    if (item1.classList.contains('show')) {
        arrow.style.transform = 'rotate(180deg)'
    } else {
        arrow.style.transform = 'rotate(0)'
    }
}

button.addEventListener('click', handleButton)