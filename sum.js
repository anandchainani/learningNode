// exporting the codde
function calculateSum(...numbers) {
    // Check if any numbers were passed
    if (numbers.length === 0) {
        return "No numbers were provided.";
    }

    // Check if all arguments are numbers
    const allNumbers = numbers.every((num) => typeof num === 'number');

    if (!allNumbers) {
        return "Invalid input. Please provide only numbers.";
    }

    // Calculate the sum
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return sum;
}

module.exports = calculateSum;