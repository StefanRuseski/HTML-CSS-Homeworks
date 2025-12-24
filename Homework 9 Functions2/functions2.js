function humanDogAge(humanYears) {
    let dogYears = humanYears * 7;
    console.log("Your rottweiler is " + dogYears + " years old in dog years.");
    return dogYears;
}
humanDogAge(4); // Should print: "Your rottweiler is 28 years old in dog years."

function dogHumanAge(dogYears) {
    let humanYears = dogYears / 7;
    console.log("Your rottweiler is " + humanYears + " years old in human years.");
    return humanYears;
}
dogHumanAge(21); // Should print: "Your rottweiler is 3 years old in human years."
