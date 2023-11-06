function calculator(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    switch (operator) {
        case 'ADD':
            result = num1 + num2;
            break;
        case 'SUB':
            result = num1 - num2;
            break;
        case 'MUL':
            result = num1 * num2;
            break;
        default:
            result = num1 / num2;
            break;
    }
    document.getElementById("result").innerHTML = result;
}