function checkAdmin() {
    let username = prompt("Who are you?");
    if (username.toLowerCase() == "admin") {
        do {
        let password = prompt("Password please!!!");
        let b = false;

            if (password == "TheMaster") {
                alert("Welcome");
                b = true;
            } else if (password == "") {
                alert("Canceled");
                break;
            } else {
                alert("Wrong password");
            }
        }
        while (b = true);
    } else if (username == "") {
        alert("Canceled");
    } else {
        alert("I don't know you!");
    }
}