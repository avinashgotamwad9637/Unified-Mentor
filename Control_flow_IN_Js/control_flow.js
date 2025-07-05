// used to execute code blocks based on conditions.

let age = 18;

if (age < 18){
    console.log("Your are under age!");
}else if ( age >= 18 && age < 30) {
    console.log("Hello young man !");
}else {
    console.log("You are a senior cetizen!")
}

// Loops are used to repat a block of code.
// for loop

for (let i = 0; i < 10; i++) {
    console.log("count: " + i);
}

// while loop

let i = 0;
while (i < 10) {
    console.log("While Count: " + i);
    i++;
}

// do...while loop
// Runs the block at least once, even if the condition is false.

let num = 0;
do {
    console.log("Do While Count: 2" + num);
    num++;
}while (num < 10);


// break: exits the loop early.

// continue: skips the current iteration.

for (let i = 0; i < 10; i++) {
    if (i === 3)break;
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 2)continue;
    console.log(i);
}
