function NotAnArrayException(name) {
    this.name = name;
    this.message = "JSON String";
    this.toString = function() {
        return `${this.message} : ${this.name} - Has To be Array.`;
    }
}

function reverseJsonArray(input) {
    try {
        let arry;
        try {
            arry = JSON.parse(input);
        } catch (ex) {
            console.log(`Input is Not an JSON String ;( Zzzzz
                Exception : ${ex}`);
            return false;
        }
        if (!Array.isArray(arry)) throw new NotAnArrayException(arry);
        arry = arry.reverse();
        return output = JSON.stringify(arry);
    } catch (ex) {
        if (ex instanceof NotAnArrayException) {
            console.log("Not an Array exception : " + ex);
        } else {
            console.log("Unkown Error..");
        }
        return false;
    } finally {
        console.log("\nNext One\n");
    }
}

console.log("1: " + reverseJsonArray('["a","b","c"]')); // JSON String array.
console.log("2: " + reverseJsonArray(123)); //Not JSON int5
console.log("3: " + reverseJsonArray('{"key" : "value"}')); // JSON String Object
console.log("4: " + reverseJsonArray('{key : "value"}')); // Not Proper JSON String Object
console.log("5: " + reverseJsonArray("123")); // JSON int
// JSON String Array with Objects inside.

//let temp = [1, {key: "val", key2: "val2"}, [1,2,3]];
console.log("6: " + reverseJsonArray('[1,{"key":"val","key2":"val2"},[1,2,3]]'));
