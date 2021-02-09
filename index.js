const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");

let error= (input)=>{
    input.className = "red";
}
let success= (input)=>{
    input.className = "green";
}

form.addEventListener("submit", (e)=>{
    if(username.value ===""){
        error(username);
    }else{
        success(username);
    }
    if(email.value ===""){
        error(email);
    }else{
        success(email);
    }
    if(tel.value ===""){
        error(tel);
    }else{
        success(tel);
    }
    if(password.value ===""){
        error(password);
    }else{
        success(password);
    }
    if(repassword.value ===""){
        error(repassword);
    }else{
        success(repassword);
    }
    e.preventDefault();
});