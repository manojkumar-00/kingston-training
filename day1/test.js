
// ===================== Variables =====================

var globalVar = "I am a var variable (global or function-scoped)";
let blockScopedVar = "I am a let variable (block-scoped)";
const constantVar = "I am a const variable (cannot be reassigned)";

// ===================== Data Types =====================
let numberType = 42; // Number
let stringType = "Hello, World!"; // String
let booleanType = true; // Boolean
let nullType = null; // Null
let undefinedType; // Undefined
let objectType = {
    key: "value",
    name: "Manoj Kumar",
    gender: "Male",
    city: "Shimla",
    is_maried: false,
    friends: ["Manoj", "Manoj Kumar", "Manoj Kumar", "Manoj Kumar"],
    new_obj: {
        checking: "Testing"
    },
    empty_obj: {}
}; // Object
let arrayType = [1, 2, 3]; // Array


for (const elem in objectType) {
    console.log(`Key = ${elem}, value = ${objectType[elem]}`);
}
