function validation(){
    var name1=document.getElementById("name").value;
    if(name1==""){
        alert("Please enter your name")
        return false;
    }
    var message=document.getElementById("message").value;
    if(message==""){
        alert("Please enter your message")
        return false;
    }
    var email = document.getElementById("email").value;
    var reg = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    var result = reg.test(email);
    if(result==false){
        alert("Invalid E-mail ID");
        return false;
    }
    return true;
}
