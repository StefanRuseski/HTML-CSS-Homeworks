function sumMaxMin(arr) {
    let max = null;
    let min = null;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            if (max === null || arr[i] > max) {
                max = arr[i];
            }
            if (min === null || arr[i] < min) {
                min = arr[i];
            }
        }
    }


if (max === null || min === null) {   
    return "No numbers in the array!";
}

let sum = max + min;
return "Max: " + max + ", Min: " + min + ", Sum: " + sum;
}

let mixedArray = [3, "hello", 7, true, -2, "world", 10];
console.log(sumMaxMin(mixedArray));