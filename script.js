// Print odds 1-20 Starts
var oddNumber = 1;

for (var i = 0; i < 20; i += 2) {
    console.log(oddNumber);
    oddNumber += 2;
}
// Print odds 1-20 Ends

// Decreasing Multiples of 3 Starts
var arr = [];
for (val = 100; val >= 0; val = val - 3) {
    arr.push(val)
}
console.log(arr);
// Decreasing Multiples of 3 Ends

// Print the sequence Starts
var arr = [];
for (num = 4; num >= -4; num = num - 1.5) {
    arr.push(num)
}
console.log(arr);
// Pint the suquence Ends

// Sigma Starts 
var getNum = []; {
    let sum = 0;
    for (let i = 1; i < 101; i++) {
        sum += i;
    }
    console.log(sum); // Returns 5050
}
// Sigma Ends

// Factorial Starts
function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
let n = 12;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);
// Factorial Ends