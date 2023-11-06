function fibonacci() {
    let f0 = 0;
    let f1 = 1;
    let sum = 0;
    do {
        let number = parseInt(prompt("Nhập n số fibonacci"));
        if (number < 0) {
            alert("Không hợp lệ");
        } else if (number === 0 || number === 1) {
            document.write(number);
        } else {
            for (let i = 1; i <= number; i++) {
                f0 = f1;
                f1 = sum;
                sum = f0 + f1;
                document.write(sum + "<br>");
                // document.getElementById("fibonacci").innerHTML = sum + "<br>";
            }
        }
    } while (number < 0)
}

function giaiThua(){
    let n = parseInt(prompt("Nhập số n"));
    let result = 1;
    for (let i = n ; i > 0 ; i--){
        result = result * i;
    }
    alert("Kết quả là: " + result);
}

function tamGiacVuong(){
    let n = parseInt(prompt("Nhập số cạnh tam giác"));
    let result = "";
    let tamGiac = document.getElementById("tamGiacVuong");
    for (let i = 1; i <= n ; i++){
        for (let j = 1 ; j <= i ; j++){
            result += "*";
        }
        result += "<br>";
    }
    result += "<br>";

    for (let i = 1; i <= n ; i++){
        for (let j = n ; j >= i ; j--){
            result += "*";
        }
        result += "<br>";
    }
    result += "<br>";
    for (let i = 1; i <= n ; i++){
        for (let j = n - 1; j >= i; j--){
            result += "&nbsp&nbsp";
        }
        for (let k = 1 ; k <= i; k++){
        result += "*";
        }
        result += "<br>";
    }
    result += "<br>";
    for (let i = 1; i <= n ; i++){
        for (let j = n; j >= i ; j--){
            result += "*";
        }
        result += "<br>";
        for (let k = 1 ; k <= i; k++){
            result += "&nbsp&nbsp";
        }
    }
    tamGiac.innerHTML = result;
}

function hinhChuNhat() {
    let a = parseInt(prompt("Nhập chiều dài"));
    let b = parseInt(prompt("Nhập chiều rộng"));
    let i, j, k;
    let result = "";
    for (i = 1; i <= b; i++) {
        for (j = 1; j <= a; j++) {
            if (i == 1 || i == b || j == 1 || j == a) {
                result += "*";
            } else {
                result += "&nbsp&nbsp";
            }
        }
        result += "<br>";
    }
        document.getElementById("hinhChuNhat").innerHTML = result;

}