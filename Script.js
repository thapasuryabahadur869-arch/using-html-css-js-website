function validateForm(){

document.getElementById("emailError").innerHTML="";
document.getElementById("passError").innerHTML="";

let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;

if(email.indexOf("@")==-1){
document.getElementById("emailError").innerHTML="Email must contain @.";
valid=false;
}

if(pass.length<15){
document.getElementById("passError").innerHTML="Password must be at least 15characters.";
valid=false;
}

if(valid){
alert("Login Successful");
}

return false;
}
