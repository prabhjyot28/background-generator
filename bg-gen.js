var input1=document.querySelector(".color1");
var input2=document.querySelector(".color2");
var body=document.getElementsByTagName("body")[0];
var h3= document.querySelector("h3");
var h2= document.querySelector("h2");

input1.addEventListener("input",function(){
     body.style.background= "linear-gradient(to right,"+input1.value+","+input2.value+")";
     h3.textContent= body.style.background +";" ;
});

input2.addEventListener("input",function(){
	body.style.background= "linear-gradient(to right,"+input1.value+","+input2.value+")";
	h3.textContent= body.style.background +";" ;
});



