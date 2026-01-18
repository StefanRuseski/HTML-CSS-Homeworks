function joinStrings(stringsArray) {

    let result = "";

    for (let i = 0; i < stringsArray.length; i++ ) {
        result += stringsArray[i];

    if (i < stringsArray.length - 1 ) {
        result += " ";
    }

}
    return result;
}

let words = ["Hello", "there", "colleagues", "of", "AvengaAcademy", "!"];

console.log(joinStrings(words));
