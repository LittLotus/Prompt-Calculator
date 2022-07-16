function myCalculator(){

var operation = prompt("Which operation would you like to perform? Choose one:\n +  -  /  *  %")

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
}
myCalculator()

function restartCalculator(){
    var restart = prompt("Would you like to perform another operation? Yes or No");
    if (restart == "Yes"){
        myCalculator()
    }
    else {
        alert("Thank you for using the calculator. See you next time")
    }
}
restartCalculator()
