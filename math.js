// function addNumbers(x,y) {
//     if (typeof x !== "number" || typeof y !== "number") {
//         throw new Error("inputs must be numbers!");
//     }
//     return x + y;
// }
// function subtractNumbers(x,y){
//     return x - y;
// }          
// module.exports = {
//     addNumbers,
//     subtractNumbers
// };

// ES6 syntax
export function addNumbers(x,y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("inputs must be numbers!");
    }
    return x + y;
}
export function subtractNumbers(x,y){
    return x - y;
}          
