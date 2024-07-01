//closure function
function greetings(name) {
    const defaultMessage = "Hello "

    return function () {
        return defaultMessage + name
    }
}

const greetingDavid = greetings("David")
console.log(greetingDavid());

//currying function
function multiplier(factor) {
    return function (number) {
        return number * factor
    }
}
const mul3 = multiplier(3)
const mul5 = multiplier(5)
console.log(mul3(5));
console.log(mul5(5));

//recursive function
function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1
    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}
countDown(5)

//arrow function
const square = (a, b) => a * b
console.log(square(5, 7));
