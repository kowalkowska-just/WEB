// Add event listener

const btn1 = document.querySelector('#btn1')
console.log(btn1);

const btn2 = document.querySelector('.btn2')
console.log(btn2);

function handleClickButton1() {
    console.log("Button 1 clicked.");
}

function addNumbers() {
    console.log(2+2);
}


//variable.addEventListener('event', 'function')
btn1.addEventListener('click',handleClickButton1)

btn2.addEventListener('click', addNumbers)