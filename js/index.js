let display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function sin() {
    display.value = Math.sin(eval(display.value));
}

function cos() {
    display.value = Math.cos(eval(display.value));
}

function tan() {
    display.value = Math.tan(eval(display.value));
}

function log() {
    display.value = Math.log10(eval(display.value));
}

function power() {
    display.value += '**';
}

function sqrt() {
    display.value = Math.sqrt(eval(display.value));
}

function memorySave() {
    memory = eval(display.value);
    display.value = '';
}

function memoryRecall() {
    display.value += memory;
}