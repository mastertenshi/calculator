function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    const calc = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide
    };

    return calc[operator] (a, b);
}

function addNumberListeners() {
    for (let i = 0; i < 10; i++) {
        document.getElementById(`${i}`).addEventListener("click", function() {
            if(display.textContent.length < 24)
                display.textContent += i;
        });
    }
}

const display = document.getElementById("display");

document.getElementById("clear").addEventListener("click", function(){
    display.textContent = "";
});

addNumberListeners();

