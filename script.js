
function number() {

let numb = document.getElementById("num").value;
console.log(numb);

let numLength = numb.length;
let firstNums = numb.substr(0, 2);
let firstNums1 = numb.substr(0, 3);
let lastNums = numb.substr(numLength-9, 9);
console.log(lastNums);
let num;

if (numLength < 9) {
    document.getElementById("replay").innerHTML = "Please Enter a valid Number";
    alert("Number Missing! Please Check Again. . .");

}else if(numLength == 9){
    alert("Number Validation Successful. . .");
    num = "You Entered : +94" + numb;
    document.getElementById("replay").innerHTML = num;

}else if(numLength == 10) {
    alert("Number Validation Successful. . .");
    num = "You Entered : +94" + lastNums;
    document.getElementById("replay").innerHTML = num;


}else if(numLength == 11 && firstNums == 94) {
    alert("Number Validation Successful. . .");
    num = "You Entered : +94" + lastNums;
    document.getElementById("replay").innerHTML = num;

}else if(numLength == 11 && firstNums != 94) {
    alert("Please Enetr a valid Number !")
    document.getElementById("replay").innerHTML = "Invalid Number";

}else if(numLength == 12 && firstNums1 != +94) {
    alert("Please Enetr a valid Number !")
    document.getElementById("replay").innerHTML = "Invalid Number";

}else if(numLength == 12 && firstNums1 == +94) {
    alert("Number Validation Successful. . .");
    num = "You Entered : +94" + lastNums;
    document.getElementById("replay").innerHTML = num;

}else {
    alert("Please Enetr a valid Number !")
    document.getElementById("replay").innerHTML = "Invalid Number";
}

}