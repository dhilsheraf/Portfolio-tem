function validation(){
    var name1=document.getElementById("name").value;
    
    var message=document.getElementById("message").value;
   
    var email = document.getElementById("email").value;
    let reg=/^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+\.([a-z]+)(.[a.z]+)?$/;
    var result = reg.test(email);

    if(name1==""){
        alert("Please enter your name");
        return false;
    }
    if(email==""){
        alert("Enter E-mail ID");
        return false;
    }
    
    if(result==false){
        alert("Invalid E-mail ID");
        return false;
    }
    if(message==""){
        alert("Please enter your message")
        return false;
    }
    return true;
}
