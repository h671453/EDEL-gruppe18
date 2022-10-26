//let username = window.prompt("Name");
let username;
let userEmail;
let password;
document.getElementById("userButton").onclick = function(){
    username = document.getElementById("usernameInput").value;
    userEmail= document.getElementById("userEmailInput").value;
    password = document.getElementById("userPassword").value;
    console.log(username + userEmail + password);
}