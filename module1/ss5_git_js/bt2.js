<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Title</title>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="demo.js"></script>
</head>
<body>
<button onclick="alert('Bạn đã bấm vào button')">Click</button>
<div id="result">Hello</div>
<div id="result1">Hello</div>
<script>
    // var x = 2;
    var y = 1; // var z = 2;
    /*  line 1
    line 2
    line 3
    */
    ​
    y = prompt("Mời bạn nhập vào tên của bạn: ");
    // alert("Tên của bạn là " + y);
    if (confirm("Tên của bạn là " + y + " có đúng không ?")) {
    // alert("Cám ơn bạn "+ y);
    // console.log("Cám ơn bạn "+ y)
    // document.write("Cám ơn bạn "+ y)
    document.getElementById("result").innerHTML="<b>Cám ơn bạn "+ y + "</b>";
    document.getElementById("result1").innerText="<b>Cám ơn bạn "+ y + "</b>";
    ​
    ​
} else {
    // alert("Xin bạn nhập tên vào");
    // console.log("Xin bạn nhập tên vào");
    // document.write("Xin bạn nhập tên vào");
}
</script>
</body>
</html>