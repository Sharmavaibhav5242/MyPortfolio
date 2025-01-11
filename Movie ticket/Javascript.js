let login=()=>{

    let loginname = document.querySelector("#name").value;
    let loginpassword = document.querySelector("#password").value;

    let errornamelogin = document.querySelector("#name");
    let errorpasswordlogin = document.querySelector("#password");

    errornamelogin.setAttribute("placeholder", "");
    errorpasswordlogin.setAttribute("placeholder", "");

    if (loginname === "") {
        errornamelogin.setAttribute("placeholder", "Please Enter your Name");
        errornamelogin.style.borderColor = "red";
        document.querySelector("#name").focus();
        return false;
    }

    if (!(loginpassword.match(/[1234567890]/) &&
    loginpassword.match(/[!@#$%^&*()]/) &&
    loginpassword.match(/[a-z]/) &&
    loginpassword.match(/[A-Z]/))) {
    document.querySelector("#password").focus();
    alert("Password should have at least one uppercase letter, one lowercase letter, one digit");
    return false;

}
 else if (loginpassword === "") {
    errorpasswordlogin.setAttribute("placeholder", "Please Enter your Password");
    errorpasswordlogin.style.borderColor = "red";
    document.querySelector("#password").focus();
    return false;
}

let storedName = localStorage.getItem("name");
let storedPassword = localStorage.getItem("password");


if (loginname === storedName && loginpassword === storedPassword) {
    alert("Login Successful");
    location.href = "localhome.html"; 
} else {
    alert("Login credentials do not match!");
}
return false
}