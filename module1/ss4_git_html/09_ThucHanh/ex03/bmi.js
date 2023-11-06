function checkBMI(){
    let weight = document.getElementById("weight").value,
        height = document.getElementById("height").value,
        bmi = weight / (Math.pow(height, 2)),
        result = "";
    if (bmi > 0 && bmi <= 18.5) {
        result = "Underweight";
    }
    else if (bmi > 18.5 && bmi <= 25){
        result = "Normal";
    }
    else if (bmi > 25 && bmi <= 30){
        result = "Overweight";
    }
    else if (bmi > 30){
        result = "Obese";
    }
    else {
        result = "typing an invalid input";
    }
    document.getElementById("result").innerHTML = "Your bmi is: "+ bmi + ", You are "+ result;
}