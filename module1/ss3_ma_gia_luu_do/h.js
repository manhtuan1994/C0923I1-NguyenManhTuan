<!DOCTYPE html>
<html>

<body>
<h2>JavaScript Loops</h2>
<p id="demo"></p>
<script>
    let text = "";
    let i;
    for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}
    document.getElementById("demo").innerHTML = text;
</script>
</body>

</html>