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

    return calc[operator] (a, b);
}

function addNumberListeners() {
    for (let i = 0; i < 10; i++) {
        document.getElementById(`${i}`).addEventListener("click", function() {
            if (display.children[0].id === "result"){
                display.children[0].remove();
                display.appendChild(document.createElement("span"));
                display.lastElementChild.id = "number";
            }
            if(display.lastElementChild.id === "operator") {
                display.appendChild(document.createElement("span"));
                display.lastElementChild.id = "number";
            }
            display.lastElementChild.textContent += i;
        });
    }
}

function addOperatorListeners() {
    const op = ["plus", "minus", "multiply", "divide"];
    for (let i in op){
        document.getElementById(`${op[i]}`).addEventListener("click", function() {
            if (display.lastElementChild.id !== "operator" && display.lastElementChild.textContent !== "") {
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

function removeChildren() {
    for(let i = display.children.length - 1; i > 0; i--) {
        display.children[i].remove();
    }
}



addNumberListeners();

addClearListener();

addOperatorListeners();

