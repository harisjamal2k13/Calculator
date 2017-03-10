var a = +prompt("Enter 1st Value");
var b = prompt("Mathematical Operator", "+,-,*,/");
var c = +prompt("Enter last number");

if (b == "+") {
alert(a + c);
}
else if (b == "-") {
    alert(a - c);
}
else if (b == "*") {
    alert(a * c);
}
else if (b == "/") {
    alert(a / c);
}
else  {
    alert("Not a Valid number");
}


