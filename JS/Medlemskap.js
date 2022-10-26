//let username = window.prompt("Name");
let username;
let userEmail;
document.getElementById("usernameButton").onclick = function(){
    username = document.getElementById("usernameInput").value;
    userEmail= document.getElementById("userEmailInput").value;
    console.log(username + userEmail);
}