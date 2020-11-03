const operators = {
    "plus": "+", 
    "minus": "-", 
    "multiply": "*", 
    "divide": "/"
};

const display = document.getElementById("display");


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

    return calc[operator](a, b);
}

function addNumberListeners() {
    for (let i = 0; i < 10; i++) {
        document.getElementById(`${i}`).addEventListener("click", function() {
            if (display.firstElementChild.id === "result"){
                display.firstElementChild.remove();
                display.appendChild(document.createElement("span"));
                display.lastElementChild.id = "number";
            }
            if(display.lastElementChild.id === "operator") {
                display.appendChild(document.createElement("span"));
                display.lastElementChild.id = "number";
            }
            if(display.lastElementChild.textContent.length < 16)
                display.lastElementChild.textContent += i;
        });
    }
}

function addOperatorListeners() {
    const op = ["plus", "minus", "multiply", "divide"];
    for (let i in op){
        document.getElementById(`${op[i]}`).addEventListener("click", function() {
            if (display.lastElementChild.id !== "operator" && display.lastElementChild.textContent !== "") {
                
                calculate();

                display.appendChild(document.createElement("span"));
                display.lastElementChild.id = "operator";
                display.lastElementChild.textContent = `${operators[op[i]]}`;
            } else if (display.lastElementChild.id === "operator") {
                display.lastElementChild.textContent = `${operators[op[i]]}`;
            }
        });
    }
}

function addClearListener() {
    document.getElementById("clear").addEventListener("click", function(){
        removeChildren();
        display.children[0].textContent = "";
    });
}

function calculate() {
    if (display.children.length > 2) {
        const num1 = parseFloat(display.children[0].textContent);
        const num2 = parseFloat(display.children[2].textContent);
        const operator = display.children[1].textContent;

        display.lastElementChild.remove();
        display.lastElementChild.remove();

        let result = operate(operator, num1, num2);

        if (!(Number.isInteger(result))) {
            result = result.toFixed(3);
        }

        display.firstElementChild.textContent = result
    }
}

function addEqualsListener() {
    document.getElementById("equals").addEventListener("click", calculate);
}

function removeChildren() {
    for(let i = display.children.length - 1; i > 0; i--) {
        display.children[i].remove();
    }
}



addNumberListeners();

addClearListener();

addOperatorListeners();

addEqualsListener();

