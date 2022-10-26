//let username = window.prompt("Name");
/*let username;
let userEmail;
let password;
document.getElementById("userButton").onclick = function(){
    username = document.getElementById("usernameInput").value;
    userEmail= document.getElementById("userEmailInput").value;
    password = document.getElementById("userPassword").value;
    pas
    console.log(username + userEmail + password);
}*/

const username = document.getElementById("usernameInput");
const email = document.getElementById("userEmailInput");
const password = document.getElementById("userPassword");
const password2 = document.getElementById("userpassword2");

function checkinputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(password2Value !== passwordValue){
        setErrorfor(password2,'Passwords does not match')
    }
}
