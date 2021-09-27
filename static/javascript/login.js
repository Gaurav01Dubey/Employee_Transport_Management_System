var bt=document.querySelector(".letsgo");
var cemail="user@gmail.com";
var cpss="Password@123";
bt.addEventListener("click",function(){
    var eml=document.getElementById("emailAddress").value;
    var pas=document.getElementById("password").value;
    if(eml=="" || pas=="")
    {
        var l=document.querySelector(".login");
        l.innerHTML="Please enter the details";
        setTimeout(() => {
            l.innerHTML="Login";
        }, 2000);
    }
    else if(eml===cemail && pas===cpss)
    {
        var anc=document.querySelector(".p");
        anc.target = "_self";
        window.open("http://localhost:3000/?#",anc.target);
    }
    else
    {
        var l=document.querySelector(".login");
        l.innerHTML="Wrong email or password";
        setTimeout(() => {
            l.innerHTML="Login";
        }, 2000);
    }
});

var w=document.querySelector(".signup");
w.addEventListener("click",function(){
    var anc=document.querySelector(".up");
    anc.target = "_self";
    window.open("signup.html",anc.target);
})