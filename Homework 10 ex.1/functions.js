function tellStory(storyArray) {
    let name = storyArray[0];
    let mood = storyArray[1];
    let activity = storyArray[2];

    let story = "This is " + name + ". " + name + " is very dedicated person. " + "Now is " + mood + " because is " + activity + " all day, but it's big task and must be done.";
    return story;
}

let myStory = (["Kiko", "tired", "coding"]);

alert(tellStory(myStory));
