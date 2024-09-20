
let previousNumber = '';
const inputValue = (input) => {

    previousNumber = $('#result').val();

    $('#result').val(input + previousNumber)
}


const clearInput = () => {
    $('#result').val("");
}


const result = () => {
    $('#result').val(eval($('#result').val())) // Using evaluate
}


const deleteLastDigit = () => {
    let currentInput = $('#result').val();
    if (currentInput.length > 0) {
        $('#result').val(currentInput.slice(0, -1));
    }
}