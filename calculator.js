let display = document.getElementById("display");

// Function to add numbers/operations to display
function calculate(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last entered value (backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function equal() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
