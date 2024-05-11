let LowerData="abcdefghijklmnopqrstuvwxyz";
let UpperData="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Number="1234567890";
let Symbol="!@#$%^&*()";

let passwordInput=document.getElementById("passwordInput");
let passwordLength=document.getElementById("passwordLength");
let upper=document.getElementById("upper");
let Lower=document.getElementById("Lower");
let num=document.getElementById("num");
let sym=document.getElementById("sym");

function generateNumber(data){
    return (data[Math.floor(Math.random()*data.length)]);
}
function generate(password=""){
    if(upper.checked){
        password+=generateNumber(UpperData);
    }
    if(Lower.checked) {
        password+=generateNumber(LowerData);
    }
    if(num.checked) {
        password+=generateNumber(Number);
    }
    if(sym.checked){
        password+=generateNumber(Symbol);
    }
    if(password.length<passwordLength.value-1)
    {
        return generate(password);
    }
   passwordInput.value=password;
}
function myfun(){
    generate();
}
function copied(){
    alert("password is copy");
}