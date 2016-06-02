
// Business (or back-end) logic:
var add = function(number1, number2) {
  return number1 + number2;
};
var substract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

// User interface (or front-end) logic
$(document).ready(function () {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#outputAdd").text("Your result is: " + result);
  });
  $("form#substract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#substract1").val());
    var number2 = parseInt($("#substract2").val());
    var result = substract(number1, number2);
    $("#outputSubstract").text("Your result is: " + result);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#multiply1").val());
    var number2 = parseInt($("#multiply2").val());
    var result = multiply(number1, number2);
    $("#outputMultiply").text("Your result is: " + result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());
    var result = divide(number1, number2);
    $("#outputDivide").text("Your result is: " + result.toFixed(2));
  });
});
