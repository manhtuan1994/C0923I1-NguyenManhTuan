function  chuyenDoi(){
    let doC = document.getElementById("c").value;
    let doF = ( 9 * doC / 5 ) + 32 ;
    document.getElementById("result").innerHTML = "Result : " + doF;
}

function calculateAverage(){
    let l = parseInt(document.getElementById("ly").value);
    let h = parseInt(document.getElementById("hoa").value);
    let s = parseInt(document.getElementById("sinh").value);
    let average = (l + h + s) / 3 ;
    document.getElementById("average").innerHTML = "Average : " + average;
}

function Circle(){
    let pi = 3.14;
    let r = parseFloat(document.getElementById("radius").value);
    let Square = pi * r * r;
    let perimeter = (r * 2) * pi;
    document.getElementById("SCircle").innerHTML = "Diện tích hình tròn là: "+ Square;
    document.getElementById("PCircle").innerHTML = "Chu vi hình tròn là: "+ perimeter;
}