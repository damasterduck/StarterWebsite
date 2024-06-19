document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting

    console.log('Form submission prevented'); // Debugging line

    // Retrieve the values from the input fields
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var operation = document.getElementById('operation').value;

    // Convert the values to integers
    var number1 = parseInt(num1, 10);
    var number2 = parseInt(num2, 10);
    var result;

    // Performs function based on user input
    if (operation === 'addition') {
        result = number1 + number2;
    } else if (operation === 'multiplication') {
        result = number1 * number2;
    } else if (operation === 'division') {
        result = number1 / number2;
    }


    // Display the result
    document.getElementById('result').textContent = 'The result is: ' + result;
});
