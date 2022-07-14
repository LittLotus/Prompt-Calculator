var operation = prompt("Which operation would you like to perform? +  -  /  *  %")

var num1 = Number(prompt("Type of your first number"))
var num2 = Number(prompt("Type of your second number"))

if (operation == "+"){
    alert("The result is " + (num1+num2))
}
else if (operation == "-"){
    alert("The result is " + (num1-num2))
}
else if (operation == "*"){
    alert("The result is " + (num1*num2))
}
else if (operation == "/"){
    alert("The result is " + (num1/num2))
}
else if (operation == "%"){
    alert("The result is " + (num1 % num2))
}
else{
    alert("The operator you choose is invalid!")
}

