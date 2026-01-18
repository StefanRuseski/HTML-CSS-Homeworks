let result = "";

for (let i = 1; i <= 20; i++) {
    result = result + i;

    if (i % 2 === 0){
        result = result + "\n";
    } else {
        result = result + " ";
    }
}

console.log(result);