let okk=()=>{
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    let confirm=document.querySelector("#confirm-password").value;
    let first=document.querySelector("#first").value;
    let last=document.querySelector("#last").value;

    let errname=document.querySelector("#errname")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")
    let errfirst=document.querySelector("#errfirst")
    let errlast=document.querySelector("#errlast")

    if(name===""){
        errname.innerHTML="Please enter your name";
        errname.style.color="red";
        //document.querySelector("#username").placeholder="Enter name please";
        return false;
    }
    else if(!(email.includes('@'))&&(email.includes('.com')))
{
     erremail.innerHTML="Please enter a valid email";
     erremail.style.color="red";
     return false;
}   
else if(email===""){
    erremail.innerHTML="Please enter email";
    erremail.style.color="red";
    return false;
}
else if(first==="")
    {
        errfirst.innerHTML="Enter your first name";
        errfirst.style.color="red";
        return false;
    }
    else if(last==="")
    {
        errlast.innerHTML="Enter your last name";
        errlast.style.color="red";
        return false;
    }
else if(password==="")
{
    errpass.innerHTML="Enter password";
    errpass.style.color="red";
    return false;
}
else if(confirm===password){
    return true;
}
else if(
    !(
        password.match(/[1234567890]/)&&
        password.match(/[!@#$%^&*()]/)&&
        password.match(/[a-z]/)&&
        password.match(/[A-Z]/)
    )
){
    errpass.innerHTML="Enter a strong password";
    errpass.style.color="red";
    return false;
}
else{
    errcpass.innerHTML="Password does not match";
    document.querySelector("#confirm-password").value="";
    document.querySelector("#confirm-password").focus();
    errcpass.style.color="red";
    return false;
}

} 
    

