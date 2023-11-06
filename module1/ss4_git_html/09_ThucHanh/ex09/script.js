function temperatureConvesion(){
    doC = prompt("Nhập độ C: ");
    alert(doC * 9/5 + 32 + " độ F");
}
function meterToFeet(){
    met = prompt("Enter meter");
    alert = (met * 3.2808 + " feet");
}

function square(){
    a = prompt("Nhập cạnh");
    alert = ("Diện tích: " + a * a);
}

function rectangleSquare(){
    a = prompt("Nhập chiều dài");
    b = prompt("Nhập chiều rộng");
    alert = ("Diện tích: " + a * b);
}
function triangleSquare(){
    a = prompt("Nhập cạnh thứ nhất");
    b = prompt("Nhập cạnh thứ hai");
    alert("Diện tích tam giác: "+ a * b );
}

function phuongTrinhBac1(){
    // ax + b = 0
    a = parseFloat(prompt("Nhập số a"));
    b = parseFloat(prompt("Nhập số b"));
    if (a === 0){
        result = b;
    }else{
        result = -b / a;
    }
    alert("x = "+ result);
}

function phuongTrinhBac2(){
    // ax^2 + bx + c = 0
    a = parseFloat(prompt("Nhập số a"));
    b = parseFloat(prompt("Nhập số b"));
    c = parseFloat(prompt("Nhập số c"));
    delta = (b * b) - (4 * a * c) ;
    if (a === 0){
        if (b === 0){
            result = c;
            alert(result);
        }else{
            result = -c / b;
            alert(result);
        }
    }else {
        if (delta < 0){
            alert("Phương trình vô nghiệm");
        }else if (delta = 0){
            alert("Phương trình có nghiệm kép x1 = x2 = "+ -b/(2 * a));
        }else {
            alert ("Phương trình có 2 nghiệm phân biệt x1 = "+ (-b + Math.sqrt(delta))/ (2 * a) + ", x2 = " + (-b - Math.sqrt(delta))/ (2 * a));
        }
    }
}

function checkTuoi(){
    age = prompt("Nhập tuổi ");
    if (a >= 0 && a <= 120) {
        alert("Hợp lệ");
    }else {
        alert("Invalid");
    }
}

function checkTriangle(){
    a = parseFloat(prompt("Nhập cạnh a"));
    b = parseFloat(prompt("Nhập cạnh b"));
    c = parseFloat(prompt("Nhập cạnh c"));
    if(a <= 0 || b <= 0 || c <= 0){
        alert("Đây không phải tam giác");
    }else {
        if (a + b > c || b + c > a || a + c > b){
            alert("Đây là 1 tam giác");
        }else{
            alert("Đây không phải tam giác");
        }
    }
}

function tinhGiaDien(){
    let time =  parseFloat(prompt("Nhập thời gian sử dụng: "));
    if (time === 0 && distance === 0){
        alert("Invalid Input");
    }else{
        alert("Total: " + (((time * 60) * 24) * 30) * 1000);
    }
}
function tinhThue() {
    let thue = parseFloat(prompt("Nhập thu nhập: "));
    if (thue < 0) {
        alert("Không hợp lệ");
    } else {
        if (thue <= 2000) {
            result = (thue * 3) / 100;
        } else if (thue <= 5000) {
            result = (thue * 5) / 100;
        } else {
            result = (thue * 10) / 100;
        }
        alert("Tiền nhận được sau khi thuế: " + result);
    }
}
function tinhLaiNganHang() {
    let soTienBanDau = parseFloat(prompt("Nhập số tiền ban đầu (VNĐ):"));
    let soThangChoVay = parseInt(prompt("Nhập số tháng cho vay:"));
    let laiXuatHangThang = parseFloat(prompt("Nhập lãi xuất hàng tháng (%):"));
    let laiThang = soTienBanDau * (laiXuatHangThang / 100);
    let tongLai = 0;
    for (let i = 0; i < soThangChoVay; i++) {
        tongLai += laiThang;
    }
    let tongSoTienSauKyHan = soTienBanDau + tongLai;
alert("Tổng lãi sau " + soThangChoVay + " tháng: " + tongLai + " VNĐ");
alert("Tổng số tiền sau " + soThangChoVay + " tháng: " + tongSoTienSauKyHan + " VNĐ");
}
function menu(value){
    switch (value){
        case 'Temperature Conversion':
            temperatureConvesion();
            break;
        case 'Meter to Feet':
            meterToFeet();
            break;
        case 'Square':
            square();
            break;
        case 'Square Rectangle':
            rectangleSquare();
            break;
        case 'Square Triangle':
            triangleSquare();
            break;
        case 'Phương trình bậc 1':
            phuongTrinhBac1();
            break;
        case 'Phương trình bậc 2':
            phuongTrinhBac2();
            break;
        case 'Check Tuổi':
            checkTuoi();
            break;
        case 'Check Tam Giác':
            checkTriangle();
            break;
        case 'Tính Giá Điện':
            tinhGiaDien();
            break;
        case 'Tính Thuế Thu Nhập':
            tinhThue();
            break;
        case 'Tính Lãi Ngân Hàng':
            tinhLaiNganHang();
            break;
    }
}