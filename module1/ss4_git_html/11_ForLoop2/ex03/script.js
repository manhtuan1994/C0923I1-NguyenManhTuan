function demSo() {
    for (let i = 0; i < 100; i++) {
        if (i == 99) {
            document.write(i + " đã hoàn thành" + "<br>");
        } else {
            document.write(i + "<br>");
        }
    }
}

function nhietDo() {
    let temp;
    do {
        temp = parseInt(prompt("Nhập nhiệt độ"));
        if (isNaN(temp)) {
            alert("Vui lòng nhập một số nguyên.");
        } else if (temp > 100) {
            alert("Giảm nhiệt độ");
        } else if (temp < 20) {
            alert("Tăng nhiệt độ");
        } else {
            alert("Chuẩn rồi");
        }
    } while (isNaN(temp) || temp < 20 || temp > 100);
}

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
            }
        }
    } while (number < 0)
}

function sumFibonacci() {
    let f0 = 0;
    let f1 = 1;
    let fn = 0;
    let sum = 0;
    for (let i = 1; i <= 20; i++) {
        f0 = f1;
        f1 = fn;
        fn = f0 + f1;
        sum = sum + fn;
    }
    document.write(sum);
}

function sumOfSeven() {
    let sum = 0;
    for (i = 1; i <= (30 * 7); i++) {
        if (i % 7 == 0) {
            sum += i;
        }
    }
    document.write(sum);
}

function fizzBuzz() {
    let numbers = '';
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
            numbers += "Fizz";
        } else if (i % 5 == 0 && i % 3 != 0) {
            numbers += "Buzz";
        } else if (i % 5 == 0 && i % 3 == 0) {
            numbers += "FizzBuzz";
        } else {
            numbers += i;
        }
        numbers += "<br>";
    }
    document.write(numbers);
}

function gamePlay() {
    let rd = Math.floor(Math.random() * 100);
    // hàm random nhận gtri 0 - 1, floor để lấy gtri nguyên
    // let num;
    console.log(rd);
    do {
        for (let i = 1; i <= 3; i++) {
            let num = parseInt(prompt("Đoán số từ 0 = 99 đi !!!"));
            if (isNaN(num) || num < 0 || num >= 100) {
                alert("2 chữ số cơ mà, nhập gì đấy !!!");
                i--;
            } else {
                if (i == 3) {
                    alert("Bạn đã thua, số đó là " + rd);
                } else {
                    if (num < rd) {
                        alert("Số bạn vừa nhập nhỏ hơn số của chúng tôi");
                    } else if (num > rd) {
                        alert("Số bạn vừa nhập lớn hơn số của chúng tôi");
                    } else {
                        alert("Chúc mừng bạn đã đoán trúng!!!");
                    }
                }
            }
        }
    } while (num !== rd || i <= 3);
}