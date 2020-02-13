  //Addition Calculator
  var add =function(number1,number2){
        return number1 + number2;
        };
        var number1=parseInt(prompt("Enter NUmber:"));
        var number2=parseInt(prompt("Enter another number"));
        alert(add(number1,number2));

//BMI Calculator
var add =function(weight,height){
    return weight / height;
    };
    var weight=parseInt(prompt("Enter Weight in kgs:"));
    var height=parseFloat (prompt("Enter height in meters"));
    alert(add(weight,height));

//Celcius to farehenheit
var cel=function(celsius){
    return (celsius*9/5)+32;
};
var celsius=parseInt(prompt("Enter Celsius"));
var text ="Your Fahrenheit is" + cel(celsius);
alert(text);