let username
let password

let onSubmitOverIn = function() {
    console.log("On submit button hoverd in")
}

let onSubmitOverOut = function() {
    console.log("On submit button hoverd out")
}

let onChangePassword = function(event) {
    password = event.target.value
    console.log("On input change", password)
    document.getElementById("passwordText").innerHTML = "password: " + password
}

let onChangeUsername = function(event) {
    username = event.target.value
    console.log("On input change", username)
    document.getElementById("usernameText").innerHTML = "username: " + username
}

let submitForm = function(event) {
    event.preventDefault()
    console.log("Form submitted")
    console.log("Username", username, "Passwored", password)
    document.getElementById("form_header").innerHTML = "Form submitted"
    document.getElementById("form_header").style.color = "lightgreen"
    document.getElementById("form_header").style.transition = "1s"
    document.getElementById("usernameText").style.color = "lightgreen"
    document.getElementById("passwordText").style.color = "lightgreen"
}