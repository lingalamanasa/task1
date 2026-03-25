alert("Welcome Javascript");
//Task 1: Username Formatter
//Requirement:
//Input: " naveen kumar "
//Output: "NAVEEN_KUMAR"
//Conditions:
//Remove spaces
//Convert to uppercase
//Replace space with _

let input = " manasa Lingala ";

let output = input.trim()          // remove extra spaces
                  .toUpperCase()   // convert to uppercase
                  .replaceAll(" ", "_"); // replace space with _

console.log(output); // MANASA_LINGALA

//Task 2: Email Validator (Basic)
//Requirement:
//Input: "test@gmail.com"
//Check:
//Must include "@"
//Must end with ".com"
//Output:
//"Valid Email" or "Invalid Email"
let email = "test@gmail.com";

if (email.includes("@") && email.endsWith(".com")) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}
// Task 3: Word Counter
//Requirement:
//Input: "javascript is very powerful language"
//Output: 5
//Hint:
//Use split()
let input1 = "javascript is very powerful language";

let count = input1.split(" ").length;

console.log(count);

//Task 4: Replace Second Word Only
//Requirement:
//Input: "python python developer"
//Output: "python javascript developer"
//Condition:
//Only replace second "python"
let str = "python python developer"
console.log(str.split(" ")[1].replace("python","javascript"));

//Task 5: Password Strength Checker
//Requirement:
//Check password:
//Minimum 8 characters
//Must include:
//Uppercase
//Lowercase
//Number
//Output:
//"Strong" / "Weak"

let password = "Test1234";

let hasUpper = /[A-Z]/.test(password);
let hasLower = /[a-z]/.test(password);
let hasNumber = /[0-9]/.test(password);
let isLengthValid = password.length >= 8;

if (hasUpper && hasLower && hasNumber && isLengthValid) {
    console.log("Strong");
} else {
    console.log("Weak");
}

//Task 6: Reverse a String
//Requirement:
//Input: "hello"
//Output: "olleh"

let str1 = "hello";

let reversed = str1.split("").reverse().join("");

console.log(reversed); 

//Task 7: Find Day of Birth (Improved)
//Requirement:
//Input: DOB (year, month, date)
//Output: "You were born on Monday"
//Extra:
//Validate month (1-12)
//Validate date (1-31)

function findDay(year, month, date) {

    if (month < 1 || month > 12) {
        console.log("Invalid month");
        return;
    }

    if (date < 1 || date > 31) {
        console.log("Invalid date");
        return;
    }

    let dob = new Date(year, month - 1, date);

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log("You were born on " + days[dob.getDay()]);
}

findDay(1996,9,25);

//ask 8: Live Digital Clock
//Requirement:
//Display current time
//Update every second
//Hint:
//Use setInterval()  (Try how to use setInterval use AI)

setInterval(() => {
    let now = new Date();

    let time = now.toLocaleTimeString();

    console.log(time);
},10 );

// Task 9: Date Difference Calculator
//Requirement:
//Input: Two dates
//Output: Difference in days
let date1 = new Date("2025-01-01");
let date2 = new Date("2025-01-10");

let diffTime = Math.abs(date2 - date1);
let diffDays = diffTime / (1000 * 60 * 60 * 24);

console.log(diffDays); // 9

//Task 10: Character Frequency Counter
//Requirement:
//Input: "javascript"
//Output:
//{ j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1 }

let input_ = "javascript";
let frequency = {};

for (let char of input_) {
    if (frequency[char]) {
        frequency[char] += 1;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);


            


