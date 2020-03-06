var email = document.createElement("input");
document.body.appendChild(email);
email.id = "email";
email.type = "text";
email.innerHTML = "Enter email";

var div1 = document.createElement("div");
document.body.appendChild(div1);
div1.innerHTML = email.innerHTML;
div1.id = "div1";

var password = document.createElement("input");
document.body.appendChild(password);
password.id = "password";
password.type = "password";
password.innerHTML = "Enter password"

var div2 =document.createElement("div");
div2.innerHTML = password.innerHTML;
div2.id = "div2";
document.body.appendChild(div2);

function verify(){
    var output = " ";
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)){
        output += "\nsuccess you have entered correct email";
    }
    else{
        output += "\nSorry the email format is wrong";
    }
    if(password.value.length == 8){
        output += "\n Congrats Password is 8 characters";
    }
    else{
        output += "\nSorry password is not 8 characters"
    }
    alert(output);
}

var btn = document.createElement("button");
btn.innerHTML = "Login";
btn.id = "div3";
document.body.appendChild(btn);

btn.addEventListener("click", verify);
