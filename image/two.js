
function abcd() {  
var data="<span class='error'>my error</span>"
document.getElementById('mylocation').innerHTML=data;  

}
/*

function validate() {  
var msg;  
if(document.myForm.userPass.value.length>5){  
msg="good";  
}  
else{  
msg="poor";  
}  
document.getElementById('mylocation').innerText=msg;  
 }



 function abc(){
 	var name=document.register.name.value.length;
 	var pass=document.register.password.value.length;
     
     if(name===0){
     	alert("name cant be null")
     	return false;
     }else if(pass<6){
     	alert("password must be atleat 6 character long")
     return false;
 }

 }


function matchpass(){
var firstpassword=document.querySelector('.pass1').value;
var secondpassword=document.querySelector('.pass2').value;

if(firstpassword===secondpassword){
return true;
}
else{
alert("password must be same!");
return false;
}
}
  
function validateemail()  
{  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email=document.querySelector('.email').value;
    if (email.match(mailformat))
    {
    	return true;
    }else{
    	alert ("enter corrct email")
    	return false
    }


    function large(x) {
  x.style.height = "164px";
  x.style.width = "100px";
}

function small(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}

var x = 0;
function myFunction() {
  document.getElementById("demo").innerHTML = x += 1;
}

function kp(){

var x=document.querySelector('.number').value;
if(keyCode >= 48 && keyCode <= 57)
{
	return true;
}
else
{
	alert('sorry')
return false
}
}




function uc(){
	var s=document.querySelector('.name'); 
	s.value=s.value.toUpperCase();
}*/

