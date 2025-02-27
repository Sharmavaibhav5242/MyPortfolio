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

    if(name===" "){
        errname.innerHTML="Please enter your name";
        errname.style.color="red";
        document.querySelector("#username").placeholder="Enter name please";
        return false;
    }

}