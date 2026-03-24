alert("Welcome Javascript");
// Spread & Rest Operator
//1.Merge two arrays [10,20] and [30,40] using spread and add 50 at the end.
let arr1=[10,20]
let arr2=[30,40]
let newArray=[...arr1,...arr2,50]
console.log(newArray);

//2.Clone an array [1,2,3] and modify the clone without affecting the original.
let  originalCloneArr = [1, 2, 3];
let  clonedArr = [...originalCloneArr];
clonedArr[0] = 99;
console.log("Original:", originalCloneArr);
console.log("Clone:", clonedArr);

//3.Merge two objects where both have a salary key - observe which value overrides.
let objA = { name: "John", salary: 30000 };
let objB = { city: "Chennai", salary: 50000 };
let mergedObj = { ...objA, ...objB };
console.log("Merged object:", mergedObj); // salary from objB overrides

//4.Create a function that accepts unlimited numbers using rest and returns their sum.
function sumAllNumbers(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum using rest:", sumAllNumbers(10, 20, 30, 40));

//5.Create a function that takes first two parameters separately and rest as an array - print only rest values.
function printRestValues(first, second, ...restValues) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest values:", restValues);
}
printRestValues(1, 2, 3, 4, 5, 6);

// Destructuring
//6.Extract first and last value from [5,10,15,20] using destructuring.
let destructArr1 = [5, 10, 15, 20];
let[d1,d2,d3,d4]= destructArr1
console.log("firstval:",d1);
console.log("lastval:",d4);

//7.Swap two variables using destructuring.
let swapA = 100;
let swapB = 200;
[swapA, swapB] = [swapB, swapA];
console.log("Swap A:", swapA);
console.log("Swap B:", swapB);

//8.From nested array [1,[2,[3,[4]]]], extract value 4.
let nested=[1,[2,[3,[4]]]];
let nestedArray=nested[1][1][1][0];
console.log("extract4:",nestedArray);

//9.Destructure object {name:"John", age:25} and rename variables (name - userName).
let personObj = { name: "John", age: 25 };
let { name: userName, age: userAge } = personObj;
console.log("userName:", userName);
console.log("userAge:", userAge);

//10.Set default value while destructuring when property is missing.
let studentObj = { name: "Shiva" };
let { name: studentName, city: studentCity = "Hyderabad" } = studentObj;
console.log("studentName:", studentName);
console.log("studentCity:", studentCity);

//Basic Array Operations
//11.Add values [6,7] to [1,2,3,4,5] using push.
let pushArr = [1, 2, 3, 4, 5];
pushArr.push(6, 7);
console.log("After push:", pushArr);

//12.Remove last element and store it in a variable.

let popArr = [10, 20, 30, 40];
let removedLast = popArr.pop();
console.log("Removed last:", removedLast);
console.log("After pop:", popArr);

//13.Remove first element and log remaining array.
let shiftArr = [10, 20, 30, 40];
let removedfirst =shiftArr.shift();
console.log("Removed first:", removedfirst);
console.log("After shift:", shiftArr);

//14.Add element at beginning using unshift.
let unshiftArr = [10, 20, 30, 40];
let addLast =unshiftArr.unshift(5);
console.log("AddLast:", addLast);
console.log("After unshift:", unshiftArr);

//15.Use splice() to remove middle elements from [1,2,3,4,5,6].
let spliceArr=[1,2,3,4,5,6];
spliceArr.splice(2,2);
console.log(spliceArr);

//Slice / Splice / Flat
//16.Extract [4000,5000,6000] using slice().
let sliceArr=[1,2,3,4000,5000,6000,7,8];
sliceVal=sliceArr.slice(3,6);
console.log(sliceVal);

//17.Replace 2 elements in an array using splice().
let spliceReplaceArr = [10, 20, 30, 40, 50];
spliceReplaceArr.splice(1, 2, 99, 100); // replace 20,30
console.log("After splice replace:", spliceReplaceArr);

//18.Flatten [1,[2,[3,[4]]]] completely.
let nest=[1,[2,[3,[4]]]];
let flatval=nest.flat(3)
console.log(flatval);

//19.Flatten only one level of nested array.
let nest1=[1,[2,[3,[4]]]];
let flatval1=nest1.flat(1)
console.log(flatval1);

//20.Insert values without deleting using splice().
let spliceInsertArr = [1, 2, 5, 6];
spliceInsertArr.splice(2, 0, 3, 4);
console.log("After insert:", spliceInsertArr);

// Searching & Checking
//21.Check if value 100 exists in an array.
let searchArr1 = [10, 20, 100, 40];
console.log("Exist 100:", searchArr1.includes(100));

//22.Find index of value 3 starting from index 2.
let searchArr2 = [1, 2, 3, 4, 3, 5];
indexarr=searchArr2.indexOf(3, 2)
console.log("Index of 3 from index 2:", indexarr);

//23.Find last occurrence of 5 in [1,5,3,5,2].
let searchArr3 = [1, 5, 3, 5, 2];
console.log( "Last index of 5:",searchArr3.lastIndexOf(5));

//24.Check if all values are positive using every().
let positiveArr = [2, 5, 8, 11];
console.log("All positive:", positiveArr.every(num => num > 0));

//25.Check if any value is greater than 50 using some().
let someArr = [10, 20, 55, 30];
console.log("Any value > 50:", someArr.some(num => num > 50));

//Sorting
//26.Sort [10,5,100,1] in ascending order correctly.
let sortNumArr1 = [10, 5, 100, 1];
sortNumArr1.sort((a, b) => a - b);
console.log("Ascending:", sortNumArr1);

//27.Sort array of numbers in descending order.
let sortNumArr2 = [10, 5, 100, 1];
sortNumArr2.sort((a, b) => b - a);
console.log("Descending:", sortNumArr2);

//28.Sort array of objects by salary.
let employeesSort = [
  { name: "A", salary: 40000 },
  { name: "B", salary: 20000 },
  { name: "C", salary: 60000 }
];
employeesSort.sort((a, b) => a.salary - b.salary);
console.log("Employees by salary:", employeesSort);

//29.Reverse a sorted array.
let reverseArr = [1, 2, 3, 4, 5];
reverseArr.reverse();
console.log("Reversed:", reverseArr);

//30.Identify why default sort() fails for numbers.
let defaultSortFail = [10, 5, 100, 1];
console.log("Default sort:", [...defaultSortFail].sort());
console.log("Reason: default sort() treats values as strings, so 100 comes before 5.");

//Higher Order Functions
//forEach
//31.Print all elements of an array using forEach().
let forEachArr = ["apple", "banana", "orange"];
forEachArr.forEach(item => console.log("forEach item:", item));

//32.Try returning value from forEach() - observe result.
let forEachReturn = forEachArr.forEach(item => item.toUpperCase());
console.log("Returning from forEach gives:", forEachReturn);

//map
//33.Convert [1,2,3] into [2,4,6].
let mapNums = [1, 2, 3];
let doubledNums = mapNums.map(num => num * 2);
console.log("Doubled:", doubledNums);

//34.Convert array of names to uppercase
let nameList = ["manu", "srinu", "shiva"];
let upperNames = nameList.map(name => name.toUpperCase());
console.log("Uppercase names:", upperNames);

//35.Extract only salary from employee objects.
let employeeList = [
  { name: "John", salary: 100000 },
  { name: "Mary", salary: 200000 }
];
let salaryOnly = employeeList.map(emp => emp.salary);
console.log("Salaries:", salaryOnly);

//filter
//36.Filter employees with salary > 300000.
let salaryEmployees = [
  { name: "A", salary: 250000 },
  { name: "B", salary: 350000 },
  { name: "C", salary: 500000 }
];
let highSalaryEmployees = salaryEmployees.filter(emp => emp.salary > 300000);
console.log("Salary > 300000:", highSalaryEmployees);

//37.Get even numbers from an array.
let evenNumbersArr = [1, 2, 3, 4, 5, 6, 7, 8];
let evenOnly = evenNumbersArr.filter(num => num % 2 === 0);
console.log("Even numbers:", evenOnly);

//38.Filter strings with length > 5.
let words = ["hi", "welcome", "javascript", "to", "coding"];
let longWords = words.filter(word => word.length > 5);
console.log("Length > 5:", longWords);

//find
//39.Find first number greater than 50.
let findNums = [10, 20, 55, 70];
let firstGreaterThan50 = findNums.find(num => num > 50);
console.log("First > 50:", firstGreaterThan50);

let employeeFind = [
  { name: "X", salary: 300000 },
  { name: "Y", salary: 150000 },
  { name: "Z", salary: 250000 }
];

//40.Find first employee with salary < 200000.
let firstLowSalaryEmployee = employeeFind.find(emp => emp.salary < 200000);
console.log("First employee with salary < 200000:", firstLowSalaryEmployee);

//Reduce (Important )
//41.Find total sum of [10,20,30].
let reduceArr1 = [10, 20, 30];
let totalSum = reduceArr1.reduce((acc, curr) => acc + curr, 0);
console.log("Total sum:", totalSum);

//42.Find maximum number using reduce.
let reduceArr2 = [5, 20, 3, 99, 40];
let maxNum = reduceArr2.reduce((acc, curr) => (curr > acc ? curr : acc), reduceArr2[0]);
console.log("Maximum:", maxNum);

// 43.Count total number of elements.
let reduceArr3 = [1, 2, 3, 4, 5, 6];
let countElements = reduceArr3.reduce((acc) => acc + 1, 0);
console.log("Count:", countElements);

// 44.Convert array into object using reduce.
let reduceArr4 = ["apple", "banana", "mango"];
let arrToObj = reduceArr4.reduce((acc, curr, index) => {
  acc["item" + (index + 1)] = curr;
  return acc;
}, {});
console.log("Array to object:", arrToObj);

// 45. Calculate total salary of employees.
let empReduce = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 20000 },
  { name: "C", salary: 30000 }
];
let totalSalary = empReduce.reduce((acc, emp) => acc + emp.salary, 0);
console.log("Total salary:", totalSalary);

// Conversion
// 46.Convert array into string using toString()
let convertArr1 = [1, 2, 3];
console.log("toString:", convertArr1.toString());

// 47. Join array with " - " separator
console.log("Join:", convertArr1.join(" - "));

// 48. Convert string "1,2,3" into array
let  strToArr = "1,2,3".split(",");
console.log("String to array:", strToArr);

// 49. Convert nested array into flat string
let  nestedForString = [1, [2, [3, [4]]]];
let  flatString = nestedForString.flat(Infinity).toString();
console.log("Flat string:", flatString);

// 50. Combine map + join to create sentence from words
let sentenceWords = ["JavaScript", "is", "fun"];
let sentence = sentenceWords.map(word => word).join(" ");
console.log("Sentence:", sentence);

// Bonus (Real-World Tasks)
// 51.Mini cart total calculator using reduce()
let cartItems = [
  { name: "Book", price: 200 },
  { name: "Pen", price: 50 },
  { name: "Bag", price: 800 }
];
let cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0);
console.log("Cart total:", cartTotal);

// 52. Filter products under 500
let products = [
  { name: "Notebook", price: 120 },
  { name: "Shoes", price: 1500 },
  { name: "Bottle", price: 250 },
  { name: "Cap", price: 400 }
];
let under500 = products.filter(product => product.price < 500);
console.log("Products under ₹500:", under500);

// 53. Create search functionality using filter()
let searchProducts = products.filter(product =>
  product.name.toLowerCase().includes("b")
);
console.log("Search result:", searchProducts);

//54. Remove duplicates from array
let duplicateArr = [1, 2, 2, 3, 4, 4, 5, 5];
let uniqueArr = [...new Set(duplicateArr)];
console.log("Unique array:", uniqueArr);

// 55. Group employees by salary range
let groupEmployees = [
  { name: "A", salary: 15000 },
  { name: "B", salary: 35000 },
  { name: "C", salary: 70000 },
  { name: "D", salary: 25000 },
  { name: "E", salary: 90000 }
];

let groupedBySalary = groupEmployees.reduce((acc, emp) => {
  let range = "";
  if (emp.salary < 20000) {
    range = "Below 20k";
  } else if (emp.salary < 50000) {
    range = "20k-50k";
  } else {
    range = "50k+";
  }

  if (!acc[range]) {
    acc[range] = [];
  }
  acc[range].push(emp);
  return acc;
}, {});

console.log("Grouped employees:", groupedBySalary);






















