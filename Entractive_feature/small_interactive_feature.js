function greetUser(){

    let userName = document.getElementById("nameInput").value;

    if (userName.trim() === ""){

        // show message when name not Enter
        document.getElementById("greetingMessage").textContent = "Please Enter Your Name.";
        return;
    }
 
    // show message on Enter name
    document.getElementById("greetingMessage").textContent = "Hello, " + userName + " !welcome in World of JavaScript 😊"
}