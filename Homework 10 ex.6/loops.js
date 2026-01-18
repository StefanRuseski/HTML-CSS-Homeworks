function fullNames(firstNames, lastNames) {
    let full = [];

    for (let i = 0; i < firstNames.length; i++) {
        let name = (i + 1) + ". " + firstNames[i] + " " + lastNames[i];
        full.push(name);
    }
    return full;
}

let firstNames = ["John", "Jane", "Jim"];
let lastNames = ["Doe", "Smith", "Beam"];

console.log(fullNames(firstNames, lastNames));