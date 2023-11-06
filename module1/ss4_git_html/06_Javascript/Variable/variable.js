let i = 10;
let f = 20.5;
let b = true
let s = 'Hà Nội'

document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s)
document.write('<br/>')
let width = 20;
let height = 10;
let area = width * height;
document.write('area = ' + area);
document.write('<br/>');

function checkBoiSo(){
var a = prompt('Nhập số a: ');
var c = prompt('Nhập số c: ');
parseInt(a);
parseInt(c);
let result = a % c == 0;
alert("So a = " + a + " So c = " + c);
alert("Result: " + result);
}