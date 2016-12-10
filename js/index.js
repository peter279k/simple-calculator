$(function() {
    $("#calculate").click(function() {
        var numberOne = $("#number-one").val();
        var numberTwo = $("#number-two").val();
        var str = "";

        if(numberOne.length === 0) {
            $("#calculate-result").html('<h3>please input the number one!</h3>');
            return;
        }

        if(numberTwo.length === 0) {
            $("#calculate-result").html('<h3>please input the number two!</h3>');
            return;
        }

        if(isNaN(numberOne)) {
            $("#calculate-result").html('<h3>The first number is not a valid number!</h3>');
            return;
        }

        if(isNaN(numberTwo)) {
            $("#calculate-result").html('<h3>The second number is not a valid number!</h3>');
            return;
        }

        if(Number(numberTwo) === 0) {
            $("#calculate-result").html('<h3>Please input the number two is the non-zeero number!</h3>');
            return;
        }

        result = doCalculate(numberOne, numberTwo);

        for(index in result) {
            str += "<p>The two numbers "+ index + ": " + result[index] + "</p>";
        }

        $("#calculate-result").html(str);

    });
});

function doCalculate(numberOne, numberTwo) {
    var result = [];
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    result["addition"] = numberOne + numberTwo;
    result["subtraction"] = numberOne - numberTwo;
    result["product"] = numberOne * numberTwo;
    result["divide"] = numberOne / numberTwo;

    return result;
}
