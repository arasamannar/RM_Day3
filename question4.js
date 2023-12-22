
//Task 1 : Simple Programs todo for variables

// 1. Declare four variables without assigning values and print them in console
let a,b,c,d;
console.log("Without assing variable: "+ a,b,c,d);   //undedfined

// 2. How to get value of the variable myvar as output
var myvar = 1;
console.log("Get value of myVar: " + myvar);

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
let first_name = "Naveen";
let last_name = "Karmegam";
let marital_status = "Unmarried";
let country = "India";
let age = "25";
console.log(`print the declared variables----> First name : ${first_name} 
                                  Last name : ${last_name} 
                                  Marital status : ${marital_status} 
                                  Country : ${country} 
                                  Age : ${age} `);

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line
var firstName = "Ramya", lastName = "Ramacharan", maritalStatus = "Unmarried", countryDetails = "India", age_ = "26";
console.log(`print the declared variables----> First name : ${firstName} 
                                  Last name : ${lastName} 
                                  Marital status : ${maritalStatus} 
                                  Country : ${countryDetails} 
                                  Age : ${age_} `);

//5. Declare variables and assign string, boolean, undefined and null data types
let string = "I am 25 years old.";
let boolean = true; // false
let undefined;
let nullData = null;
console.log("Variables and assign string, boolean, undefined and null data types------->" + string,boolean,undefined,nullData);

//6. Convert the string to integer
let number = "5";
console.log("Convert the string to integer: " +parseInt(number), Number(number), + number);

//7. Write 6 statement which provide truthy & falsey values.
//truthy values
let truthyString = "Hello Guvi"; // non - empty String
let truthyNumber = 5; // non- zero number
let truthyArray = [1,2,3]; // non - empty array
let truthyObject = {name: "Naveen"}; // non - empty obejct
let truthyFun = () => {return true}; // a function that returns true is a truthy
let truthyTrue = true; // a boolean value 'true' is truthy
//falsy values
let falsyString = ""; // empty string is a falsy
let falsyNumber = 0; // zero is falsy number
let falsyNaN = NaN; // NaN is a falsy called Not a Number
let falsyNull = null; // null value is falsy
let falsyUndfined = undefined; // the value 'undefined' is falsy
let falsyFalse = false; // The boolean value 'false'is falsy

// Task 2: Simple Programs todo for Operators
console.log();
console.log("<----------------------------TASK 2------------------------------>");

// 1. Square of a number
let s = 2
console.log(`Square of a number----> ${s * s}`);

// 2. Swapping 2 numbers
let p = 1, q = 2, temp;
// [p,q] = [q,p]
p = p + q;
q = p - q;
p = p - q;
console.log(`Swapping two numbers-----> ${p} and ${q}`);

// 3. Addition of 3 numbers
let x = 1, y = 2, z = 3;
console.log(`Addtion of three number is----> ${x + y + z}`);

// 4. Celsius to Fahrenheit conversion
let Celsius = 0;
let Fahrenheit = Celsius * (9 / 5) + 32 ;
console.log(`Fahrenheit value is---> ${Fahrenheit}`);

// 5. Meter to miles
let meter = 5;
let miles = meter * 0.0006216;
console.log(`Meter into miles----> ${miles}`);

// 6. Pounds to kg
let pounds = 2;
let kg = pounds * 0.453592;
console.log(`pounds to kg---> ${kg}`);

// 7. Calculate Batting Average
const battingAvg = (total, innings, notout) => {
    return (total / (innings - notout)).toFixed(2);
}
console.log(`Batting average is------> ${battingAvg(3500, 30, 7)}`);

// 8. Calculate five test scores and print their average
const testScore = (day1, day2, day3, day4, day5) => {
    return (day1 + day2 + day3 + day4 + day5) / 5 ;
}
console.log(`Average test score is---> ${testScore(57,34,14,66,90)}`);

// 9.Power of any number m ^ n.
let m = 3;
let n = 3;
console.log("Power of any number is-----> " + Math.pow(3, 4));

// 10. Calculate Simple Interest
function intrestCalculator (p, n, r) {
    return (p*n*r) /100;
}
console.log(`simple intrest----> ${intrestCalculator(13000,2,12)}`);

// 11. Calculate area of an equilateral triangle
const eqTri = (a) => {
    return ((Math.sqrt(3) / 4) * a * a).toFixed(2);
}
console.log("The Area of Equilateral Triangle is--->" + eqTri(5));

// 12. Area Of Isosceles Triangle
const isoTri = (b, h) => { 
    return (1/2*b*h).toFixed(2);
}
console.log("The Area of Isosceles Triangle is--->" +isoTri(1,5));

// 13. Volume Of Sphere
const sphere = (r) => {
    return ((4/3) * Math.PI * Math.pow(r,3)).toFixed(2);
}
console.log("The volume of Sphere is --->" + sphere(5));

// 14.Volume Of Prism
const prism = (base, height, length) => {
    return base * height * length;
}
console.log(`The volume of prism is----> ${prism(11,8,3)}`);

//15. Find area of a triangle
const triangle = (b, h) => { 
    return (1/2*b*h).toFixed(2);
}
console.log("The Area of Triangle is---> " + triangle(1,5));

// 16. Give the Actual cost and Sold cost, Calculate Discount Of Product
const discountOfProduct = (actual, sold) => {
   return (actual - sold).toFixed(2);
}
console.log(`Discount of product is ---> ${discountOfProduct(79.99,59.99)}`);

// 17. Given their radius of a circle and find its diameter, circumference and area
const circle = (radius) => {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;
    console.log(`The Diameter of Cricle is---> ${diameter}
The Circumfrence of Circle is---> ${circumference}
The Area of Cricle is---> ${area}`);
}
circle(2);

// 18. Given two numbers and perform all arithmetic operations.
const operations = (a,b) => {
    let add = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;
    let mod = a % b;
    let exp = a ** b;
    return `The two number----> Addition -> ${add}
                    Subraction -> ${sub}
                    Multiplication -> ${mul}
                    Division -> ${div}
                    Moduls -> ${mod}
                    Exponential -> ${exp}`;
}
console.log(operations(1,2));

// 19. Display the asterisk pattern as shown below(No loop needed).
console.log(`*****
*****
*****
*****
*****`);

// 20. Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. 
// Calculate the total energy bill of that consumer if per unit rate is 10?
const electricityBill = (watt, rate) => {
    let oneMonthConsume = (watt * 30 * 24)/ 1000 ;
    let bill = oneMonthConsume * rate;
    return `The Electricity Bill is----> ${bill}Kwh`;
}
console.log(electricityBill(100,10));

// 21. Program To Calculate CGPA
const CGPAper =  (average) => {
    return `The CGPA is ----> ${9.5 * average}`
}
console.log(CGPAper(9.5));

//Task 3: Simple Programs todo for Condition , Looping and Arrays
console.log(); //next line
console.log("<----------------------------TASK 3------------------------------>");
 
// 1. Write a loop that makes seven calls to console.log to output the following triangle:
for(let i = 1; i <= 7; i++) {
    let hashTag = ''
    for(let j =1; j <= i; j++) {
        hashTag += `#`;
    }
    console.log(hashTag);
}

//2. Iterate through the string array and print it contents
console.log(); //next line

var strArray= ["<option>Jazz</option>",
"<option>Blues</option>",
"<option>New Age</option>",
"<option>Classical</option>",
"<option>Opera</option>"];
for(let iterate of strArray) {
    console.log(iterate);
}

// Arrays
// 3. write a code to count the elements in the array . Don’t use length property
console.log(); //next line
var myarray = [11,22,33,44,55];
let count = 0;
for(let len of myarray) {
    count++;
}
console.log("The length of Array is ---->" + count);

console.log();
// 4. Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods = ["Pizza","Sushi","Chocolate Cake","Burgers","Ice Cream",
    "Pasta","Tacos","Steak","Chicken Curry","Fried Rice",
    "Salad","Cheese","Donuts","French Fries","Lasagna",
    "Ramen","Pancakes","Burritos","Cupcakes","Mango"];
console.log(foods);

//Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
console.log("The fifth favorite food is----->" + foods[4]);

// 5. Find the length of your foods array
console.log(`The length of food array is---> ${foods.length}`);

// 6. Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
friends[0] = "Munnabai" 

console.log(); // next line
console.log(`Print the elements in a array:`);
function dataHandlin(input){
    for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}
dataHandlin(friends);

// 7. Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica

let friendsList = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

console.log(); // next line
console.log(`Print the elements untill Captain America:`);
function data(input){
    for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
        if(input[i] == "CaptianAmerica")
            break;
    }
}
data(friendsList);

// 8. Find the person is ur friend or not.
console.log(); // next line
function isUrFriend(input, name){
    for (var i = 0; i < input.length; i++) {
        if(input[i] === name)
            return `The name is found!! He/She is your friend`;
    }
    return `The name is not found!! He/She is not your friend or check the characters`;
 } 
let found = isUrFriend(friends,"jeff");
console.log(found);

// 9. We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list
console.log(); // next line

var friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran"
];

var friends2 = [
  "Gabbar",
  "Rajinikanth",
  "Mass",
  "Spiderman",
  "Jeff",
  "ET"
];
const sorted = (input) => {
    return input.sort();
}
let merged = friends1.concat(friends2);
// console.log(typeof(merged));
console.log("After merged and soreted array element ----->");
console.log(sorted(merged));


// It is the common array for upcoming programs---------------------------------------------->
console.log() //next line;
let friendsName = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
  "Gabbar",
  "Rajinikanth",
  "Mass",
  "Spiderman",
  "Jeff",
  "ET",
  "Aravind",
  "Anushay",
  "Arthi"
];

// 1. Get the first item, the middle item and the last item of the array
console.log(`first item of array is---> ${firstItem = friendsName[0]}
Middle item of array is---> ${secondItem = friendsName[Math.floor(friendsName.length / 2)]}
Last item of array is---> ${lastItem = friendsName[friendsName.length - 1]}`);

//2. Add your name to the end of the friends array, and add another name to beginning.
console.log() //next line;

friendsName.push("Naveen");
friendsName.unshift("Ramya");
console.log("After add name array begin and end---->");
console.log(friendsName);

console.log() //next line;
//3. Add Mr or Ms to the names in the friends array.
function addTitle(name) {
    return "Mr " + name;
}
console.log("After add Mr or Ms to the names---->");
console.log(friendsName.map(addTitle));

console.log() //next line;
//4. Concat all the names the friends array and return as comma “,” seperated string
console.log("After join with comma---->");
console.log(friendsName.join(","));

console.log() //next line;
// 5. Find the friends names who has letter ‘a’ and return the list.
console.log("The name who started with 'A' ---->");
for(let char of friendsName) {
    if(char.charAt(0) === "A") {
        console.log(char)
    }
}

//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
console.log() //next line;
const getLength = friendsName.reduce( (start, end) => {
    return start + end.length
},0)
let average = getLength / friendsName.length
console.log(`The avarage length of all the friends name is----> ${average}`);

//7. Find the names and return the list starting with letter M.
console.log() //next line;
console.log("The name who started with 'M'---->");
for(let char of friendsName) {
    if(char.charAt(0) === "M") {
        console.log(char)
    }
}

console.log() //next line;
//8. Find the name with max characters and return the name.
const FindMaxLength = (array) => { 
let maxLength = 0;
let maxName = '';
for(let name of array) {
    if(name.length > maxLength) {
        maxLength = name.length;
        maxName = name;
    }
}
return maxName
}
console.log("The maximum characters name is ----->" + FindMaxLength(friendsName));

//9. Find the name with min characters and return the name.
const FindMinLength = (array) => { 
let maxLength = Infinity;
let maxName = '';
for(let name of array) {
    if(name.length < maxLength) {
        maxLength = name.length;
        maxName = name;
    }
}
return maxName
}
console.log("The maximum characters name is -----> " + FindMinLength(friendsName));

//Find the average in the array below.
// Make sure you add only the numbers and do avg.
const detailsList = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CA', 8, 10];
const arrayList = (detailsList) => { //fliter theh
    let number = []
    for(let num of detailsList) {
        if(typeof(num) === 'number') {
            number.push(num)
        }
    }
    return avg(number) ;
}
const avg = (array) => {
    let sum = 0;
    for(let num of array) {
        sum += num;
    }
    let avarage = sum / array.length
    return avarage;
}
console.log(arrayList(detailsList));

//Print the contents of the input variable
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(input) {
  for (let i = 0; i < input.length; i++) {
    let currentData = input[i];
    console.log("ID:", currentData[0]);
    console.log("Name:", currentData[1]);
    console.log("Birth:", currentData[2] + ", " + currentData[3]);
    console.log("Hobbies:", currentData[4]);
    console.log(); // Add an empty line for separation
  }
}
dataHandling(input);

//Object
console.log();
console.log("<-------Object-------->");
myobject = { 1: 'one', "11": 1, "name": "arun" };
console.log(myobject["11"]);  // Accessing the property with key "11"
console.log(myobject["name"]); // Accessing the property with key "name"

//Add a new key value pair to myobject
myobject['DOB'] ="24/06/2000";
myobject['native'] = "kuruvadi";
console.log(myobject);


//Write out an object literal to represent the data below.

// You didn't provide any specific data to represent
// as an object literal. To help you create an object
// literal, please provide the data you'd like to 
// represent, and I'll assist you in creating the 
// corresponding object.


  