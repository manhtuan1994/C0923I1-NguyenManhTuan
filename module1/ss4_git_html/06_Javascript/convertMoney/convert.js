function convertMoney(){
var money = document.getElementById("money").value;
var from = document.getElementById("from").value;
var to = document.getElementById("to").value;
let result;

    if (from == "vnd" && to == "usd") {
        result = "Result: " + (money / 23000) + " $"
    }
    else if (from =="usd" && to == "vnd"){
        result = "Result: " + (money * 23000) + " Đ"
        }
    else if (from== "vnd") {
        result = "Result: " + money + " Đ"
    } else {
        result = "Result: " + money + " $"
    }

    document.getElementById("result").innerHTML = result;
}