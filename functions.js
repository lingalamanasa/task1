
alert("Welcome Javascript");
//1.Create a function to print "Hello World"
function hello(){
    console.log("Hello World");
}
hello();

//2.Create a function that takes a name and prints:Welcome <name>
function welcome(name){
    console.log("Welcome " + name);
}
welcome("Manasa");

//3.Create a function to add two numbers and return the result
function add(a, b){
    return a + b;
}
console.log(add(5, 3));

//4.Create a function to check whether a number is even or odd
function checkEvenOdd(num){
    if(num % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(checkEvenOdd(7));

//5.Create a function to find the square of a number
function square(n){
    return n * n;
}
console.log(square(4));

//6.Create a function to return the largest of three numbers
function largest(a, b, c){
    return Math.max(a, b, c);
}
console.log(largest(10, 20, 15));

//7.Create a function with a default parameter (age = 18)
function userAge(age = 18){
    console.log(age);
}
userAge();
userAge(25);

//8.Create a function that returns full name (first name + last name)
function fullName(first, last){
    return first + " " + last;
}
console.log(fullName("Spider", "Man"));

//  Section 2: Return & Scope (9-14)
//9.Create a function that returns the multiplication of three numbers

function multiply(a, b, c){
    return a * b * c;
}
console.log(multiply(2,3,4));

//10.Write a function to demonstrate the difference between:
//var
//let
//const
function scopeDemo(){
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x, y, z);
}
scopeDemo();

//11.Create a nested function (function inside another function)
function outer(){
    function inner(){
        console.log("Inside inner function");
    }
    inner();
}
outer();

//12.Create a global variable and access it inside a function
let globalVar = "I am global";
function test(){
    console.log(globalVar);
}
test();

//13.Try accessing a block-scoped variable outside the block and observe the result
{
    let a = 10;
}
// console.log(a); // Error

//14.Demonstrate hoisting behavior using:
//var
//let
console.log(a); // undefined
var a = 5;

// console.log(b); // Error
let b = 10;

//15.Section 3: Function Types (15-20)
//Convert a normal function into an anonymous function
let greet = function(){
    console.log("Hello");
};
greet();

//16.Convert a normal function into an arrow function
let greet2 = () => {
    console.log("Hello Arrow");
};
greet2();

//17.Create an arrow function with single-line return
let sum = (a,b) => a + b;
console.log(sum(2,3));

//18.Create a function expression and call it
let sayHi = function(){
    console.log("Hi");
};
sayHi();


//19.Compare normal function vs arrow function using this
function normal(){
    console.log(this);
}
const arrow = () => {
    console.log(this);
};
normal();
arrow();

//20.Create an IIFE (Immediately Invoked Function Expression) to print:Executed immediately
(function(){
    console.log("Executed immediately");
})();

// Section 4: Callback & Higher Order Functions (21-25)
//21.Create a function that accepts another function as an argument and executes it
function execute(fn){
    fn();
}
execute(() => console.log("Callback executed"));

// 22.Build a calculator using callback functions (add, sub, mul)

function calc(a,b,operation){
    return operation(a,b);
}
console.log(calc(5,3,(x,y)=>x+y));
console.log(calc(5,3,(x,y)=>x-y));

// 23.Pass a function as an argument and print a custom message

function message(fn){
    console.log("Before message");
    fn();
}
message(()=>console.log("Custom message"));

// 24.Create a function that delays execution using a callback (simulate setTimeout)
function delay(fn){
    setTimeout(fn, 2000);
}
delay(()=>console.log("Delayed execution"));

// 25. Create a custom map function using callback

function customMap(arr, fn){
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i]));
    }
    return result;
}
console.log(customMap([1,2,3], x=>x*2));

//Section 5: Currying (26-28)
// 26.Convert a function:
//add(a, b, c)
//into currying format:
//add(a)(b)(c)

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(1)(2)(3));

// 27.Create a multiply function using currying
const multiply1 = a => b => c => a*b*c;
console.log(multiply1(2)(3)(4));

// 28.Create a greeting function using currying
//greet("Hello")("John")("Good Morning")

const greetFn = a => b => c => `${a} ${b} ${c}`;
console.log(greetFn("Hello")("John")("Good Morning"));

//Section 6: Generator Function (29-31)
// 29.Create a generator function that yields 3 messages
function* gen(){
    yield "Hello";
    yield "Hi";
    yield "Welcome";
}
let g = gen();
console.log(g.next().value);
console.log(g.next().value);

// 30 Iterate a generator using for...
for(let val of gen()){
    console.log(val);
}

// 31 Create an infinite generator that produces numbers (1, 2, 3...)
function* infinite(){
    let i = 1;
    while(true){
        yield i++;
    }
}
let inf = infinite();
console.log(inf.next().value);
console.log(inf.next().value);

//Section 7: Spread Operator (32-34)
// 32.Merge two arrays using spread operator
let arr1 = [1,2];
let arr2 = [3,4];
console.log([...arr1, ...arr2]);

// 33.Clone an object and modify one property
let obj = {name:"John", age:25};
let newObj = {...obj, age:30};
console.log(newObj);

// 34.Merge multiple arrays and add extra values using spread
let a1 = [1,2];
let a2 = [3,4];
let a3 = [5,6];
console.log([...a1, ...a2, ...a3, 7, 8]);

//Section 8: Rest Operator (35-37)
// 35.Create a function that accepts unlimited arguments and returns the sum
function sumAll(...nums){
    return nums.reduce((a,b)=>a+b,0);
}
console.log(sumAll(1,2,3,4));

// 36.Store extra arguments using rest operator and print them
function show(...args){
    console.log(args);
}
show(1,2,3,"hello");

// 37.Create a function to find the maximum value using rest operator
function max(...nums){
    return Math.max(...nums);
}
console.log(max(10,20,5));

//Section 9: Switch Case (38-40)
// 38.Create a switch case to print day name (1-7)

let day = 3;
switch(day){
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;

    default: console.log("Invalid");
}

// 39.Create a calculator using switch case (+, -, *, /)

let c1 = 10, b1 = 5, op = "+";
switch(op){
    case "+": console.log(c1+b1); break;
    case "-": console.log(c1-b1); break;
    case "*": console.log(c1*b1); break;
    case "/": console.log(c1/b1); break;
}

// 40.Create a grade system using switch or conditions:
//90+ - A
//75+ - B
//50+ - C
//Below 50 - Fail

let marks = 80;
switch(true){
    case (marks >= 90): console.log("A"); break;
    case (marks >= 75): console.log("B"); break;
    case (marks >= 50): console.log("C"); break;
    default: console.log("Fail");
}