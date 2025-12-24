function humanDogAge(humanYears) {
    let dogYears = humanYears * 7;
    console.log("Your rottweiler is " + dogYears + " years old in dog years.");
    return dogYears;
}
humanDogAge(4); // Should print: "Your rottweiler is 28 years old in dog years."