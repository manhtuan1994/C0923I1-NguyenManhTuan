function calculateSquare() {
    var inputWidth = prompt("Enter width: ");
    var inputHeight = prompt("Enter Height: ")
    var width = parseInt(inputWidth);
    var height = parseInt(inputHeight);
    let area = width * height;
    document.write("Area = " + area);
}