// TASK 

const numbers = [1, 2, 3, 4, 5, 6]

for (i = 0; i< numbers.length; i++) {
    console.log(numbers[i]);
}

function addNumbers(agr1, agr2, arg3) {
    console.log(agr1 + agr2 * arg3);
}

addNumbers(1,2,3)

if (numbers.length > 5) {
    console.log(`true`);
} else {
    console.log(`false`);
}

console.log(`Array with numbers have ${numbers.length} elements.`);