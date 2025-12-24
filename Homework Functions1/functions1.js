function getTypeOf(value) {
    let type = typeof value;
    console.log(type);
    return type;    
}
getTypeOf(null); // "object"
getTypeOf(true); // "boolean"
getTypeOf(22); // "number"
getTypeOf("function"); // "string"
getTypeOf(undefined); // "undefined"