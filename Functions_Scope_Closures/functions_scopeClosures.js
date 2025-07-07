// function example

// Function declarations: Hoisted to the top of their scope.

// Function expressions: Not hoisted.


function greeting(name) {
    return "Hello, "+ name + "!";
};
console.log(greeting("MR. Avinash"));
// output comes: Hello, Avinash!



// Arrow Function: Shorter syntax and lexical this.

const addition = (a = 2,b = 5) => a + b;



// scope example
function testScopes() {
    let localVar = "I'm local";
    console.log(localVar); //It Works
}
//  console.log(localVar);
// Error:localVar is not defined.



// closures example
function outer() {
    let count = 2;
    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter(); //1
counter(); //2