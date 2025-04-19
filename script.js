const display = document.getElementById("display");
const ghostDisplay = document.getElementById("ghost-display");


function changeFontSize(){
    const containerWidth = display.offsetWidth;
    ghostDisplay.textContent = display.value;

    let fontSize = 5;

    ghostDisplay.style.fontSize = fontSize + "rem";

    while (ghostDisplay.offsetWidth > containerWidth && fontSize > 1){
        fontSize -= 0.1;
        ghostDisplay.style.fontSize = fontSize + "rem";
    }

    display.style.fontSize = ghostDisplay.style.fontSize;
}

function appendToDisplay(input){
    display.value += input;
    changeFontSize();
}

function clearDisplay(){
    display.value = "";
    changeFontSize();
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    changeFontSize();
    
}