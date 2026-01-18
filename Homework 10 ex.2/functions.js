function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

let nums = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(nums));

//BONUS PART: Validate numbers

function validateNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

function sumArrayWithValidation(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (!validateNumber(numbers[i])) {
            return "Error: All elements must be valid numbers.";
        }

        sum = sum + numbers[i];
    }   

    return sum;
}


let mixedNums = [1, 2, 'three',  4, 5];
console.log("Sum of array with validation:", sumArrayWithValidation(mixedNums));