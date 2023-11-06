function checkChiaHet() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    result = a % b == 0 ? "Số " + a + " chia hết cho số " + b : "Số " + a + " không chia hết cho số " + b;
    alert(result);
}

function checkTuoi(){
    let age = parseFloat(document.getElementById("age").value);
    result = age >= 16 ? "Đủ điều kiện vào lớp 10" : "Không đủ tuổi";
    alert(result);
}

function checkSoNguyen(){
    let num = parseFloat(document.getElementById("num").value);
    if (num == 0){
        result = "Số 0";
    }else if ( num > 0) {
        result = "số dương";
    }else{
        result = "số âm";
    }
    alert(result);
}

function checkMax(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    result = Math.max(num1,num2,num3);
    alert(result + " là số lớn nhất trong 3 số");
}

function hocLuc(){
    let diem1 = parseFloat(document.getElementById("diem1").value);
    let diem2 = parseFloat(document.getElementById("diem2").value);
    let diem3 = parseFloat(document.getElementById("diem3").value);
    diem = (diem1 + diem2 + diem3) / 3;
    if (diem >= 9){
       result = "Xuất sắc";
    } else if (diem >= 8){
        result = "Giỏi";
    } else if (diem >= 7){
        result = "Khá";
    } else if (diem >= 6){
        result ="Trung bình";
    } else {
        result = "Fail";
    }
    alert("Học lực: " + result);
}

function tinhHoaHong() {
    let doanhso = parseFloat(document.getElementById("doanhso").value);
    if (doanhso < 0) {
        alert("Không hợp lệ");
    } else {
        if (doanhso <= 2000) {
            result = (doanhso * 3) / 100;
        } else if (doanhso <= 5000) {
            result = (doanhso * 5) / 100;
        } else {
            result = (doanhso * 10) / 100;
        }
        alert("Tiền hoa hồng: " + result);
    }
}
    function cuocDienThoai(){
    let distance =  parseFloat(document.getElementById("distance").value);
    let time =  parseFloat(document.getElementById("time").value);
    if (time === 0 && distance === 0){
        alert("Invalid Input");
    }else{
        alert("Total: " + ((time * 60) * distance) * 1000);
    }
    }