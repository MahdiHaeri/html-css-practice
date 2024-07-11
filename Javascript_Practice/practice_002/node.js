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
}

let onChangeUsername = function(event) {
    username = event.target.value
    console.log("On input change", username)
}

let submitForm = function(event) {
    event.preventDefault()
    console.log("Form submitted")
    console.log("Username", username, "Passwored", password)
}