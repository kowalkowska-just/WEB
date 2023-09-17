// Add event listener

const redButton = document.querySelector('#btn1')
const blueButton = document.querySelector('.btn2')
const removeButton = document.querySelector('.remove-color')
const colorContainer = document.querySelector('.color')

function redColor() {
    colorContainer.classList.add('red')
    colorContainer.classList.remove('blue')
}

function blueColor() {
    colorContainer.classList.add('blue')
    colorContainer.classList.remove('red')
}

function removeColor() {
    colorContainer.classList.remove('blue')
    colorContainer.classList.remove('red')
}

redButton.addEventListener('click', redColor)
blueButton.addEventListener('click', blueColor)
removeButton.addEventListener('click', removeColor)

