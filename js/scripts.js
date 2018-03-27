$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();

    var number2 = 1;
    var number1 = parseInt($("#input").val());
    if (number1 > 0) {
      for (number1; number1 > 0; number1 -= 1) {
      number2 = number1 * number2;
    }
      alert(number2);
    } else if (number1 < 0) {
      alert("Please enter a positive integer.");
    }
    else{
      alert(number2);
    }


  });
});
