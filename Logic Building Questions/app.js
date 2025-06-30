// ✅ Plan: Logic Building Questions (Based on Your Level)

// 01 # Write a function to find the maximum number in an array.

/*function findmaxNumber(arr){
  let max  = arr[0];
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return `${max} i find maximum number`;
}

let number = [10, 2, 37, 5,7, 50 ,33];
console.log(findmaxNumber(number))*/

// 02 # Write a function that takes a number and returns if it's even or odd

/*function findEven (num){
 
  if(num % 2 === 0){
    return `${num} is Even`;
  }else{
     return `${num} is Odd`
  }
}

let number = 7;
console.log(findEven(number));*/

/* 03 # Create a program that prints 1 to 100, but replaces:

Multiples of 3 with "Fizz"

Multiples of 5 with "Buzz"

Multiples of both with "FizzBuzz"*/

/*function fizzBuzz(){
    for(var i = 0; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
      }else if(i % 3 === 0){
        console.log("Fizz");
      }else if(i % 5 === 0){
      console.log("Buzz");
      }else{
        console.log(i);
      }
    }
}
fizzBuzz()*/

// 04 # Count how many times "a" appears in a given string.

/*function finda(str){
  let count = 0;

  for(var i = 0; i < str.length; i++){
    if(str[i].toLowerCase() === "a"){
      count++;
    }
  }
  return count;
}
console.log(finda("JAVASCRIPT IS AMAZING"));*/

// 05 # Reverse a String

/*function reversString(str){

  let convert = "";

  for(var i = str.length -1; i >= 0;  i--){
    convert += str[i]
  }
  return convert;
}

let str = "JAVASCRIPT";
console.log(reversString(str));*/

/*function reverseString(str){
   return str.split('').reverse().join('');
}

let str = "JavaScript";
console.log(reverseString(str));*/

/*function reverseString(str){
let = reverse = "";

for(var i = str.length -1; i >= 0; i--){
    reverse += str[i];
}
return reverse;
}
let str = "JavaScript";
console.log(reverseString(str));*/

// 06 # From this array of students, use .filter() to return only the students who passed (marks ≥ 50):

/*const findPassedStudent = () =>{
   
    let student = [
        {name: "Ali", marks : 45},
        {name: "Sara", marks: 75},
        {name: "Usman", marks: 35},
        {name: "Hina", marks: 90}
    ];

    let result = student.filter(s => s.marks > 50);
    
  return  console.log(result);
    

}
findPassedStudent()*/

// 07 # From the same array of students, use .map() to return this format:

/*const useMap =() => {

       let student = [
        {name: "Ali", marks : 45},
        {name: "Sara", marks: 75},
        {name: "Usman", marks: 35},
        {name: "Hina", marks: 90}
    ];

    let result = student.map( s => (`${s.name} : ${s.marks}`))

    return result
}

console.log(useMap());*/

// 08 # Use .forEach() to print all student names in uppercase from the same array.

/*const useForEach = () => {

    let student = [
        {name: "Ali", marks : 45},
        {name: "Sara", marks: 75},
        {name: "Usman", marks: 35},
        {name: "Hina", marks: 90}
    ];

    student.forEach(s => {
       console.log(`${s.name.toUpperCase()}`);
    });
}

useForEach();*/

// 09 Save an object to localStorage, then retrieve and display it

/*const objToLocal = ()  =>{

  let user = {
  name: "Akbar",
  age: 22,
  course: "JavaScript"
};

localStorage.setItem( "users" , JSON.stringify(user) ) || [];
let getUser = JSON.parse(localStorage.getItem("users"));

console.log(getUser);
}

objToLocal();*/

/* 10 #
/ let a = { val: 10 };
let b = a;
b.val = 20;

console.log(a.val, b.val); // Output?*/

// JavaScript me objects reference se store hote hain, is liye aik variable me change karne se doosra bhi change ho jata hai kyun ke dono same memory ko point karte hain.


// 11 # Palindrome Checker

/*const palindrome = (str) => {

  str = str.toLowerCase().trim();

  let reversed  = '';
 reversed = str.split('').reverse().join('');

  if(reversed === str){
    return "This is Palindrome";
  }else{
    return "This is Not Palindrome"
  }
}

console.log(palindrome("madam"));*/

// 12 # Find the second largest number in an array

/*const findSecondLargest = (num) =>{
    
  let largest = -Infinity;
  let secondLargest = - Infinity;

  for(var i = 0; i < num.length; i++){
    if(num[i] > largest){
      secondLargest = largest;
      largest = num[i];
    }else if(num[i] > secondLargest && num[i] !== largest){
      secondLargest = num[i];
    }
  }
  return secondLargest;
}
console.log(findSecondLargest([93,83,28,10,82, 56]));*/

// 11 # Create a pyramid pattern using *:

/*const starPrint = (row) =>{

for(let i = 1; i <= row; i++){
     let star = "";
    for(let j = 1; j <= i; j++){
      star += '*';
    }
    console.log(star);
}
}
starPrint(4);*/

// 13 # Remove duplicate values from an array

/*const removeDoubbleNum = (arr) => {

  let uniqArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (uniqArr.indexOf(arr[i]) === -1) {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr
}

console.log(removeDoubbleNum([1, 3, 4, 5, 6, 5, 6, 7,]));*/


/*const remove = (num) => {
  
  let uniqueArr = [];

  for(let i = 0; i < num.length;i++){
    if(uniqueArr.indexOf(num[i]) === -1){
      uniqueArr.push(num[i]);
    }
  }
  return uniqueArr;
}

console.log(remove([1,2,3,4,5,5,6,6,7,9]));*/

/*const remove = (arr) => {
  return [... new Set(arr)]
}
console.log(remove([1,2,3,4,4,5,6,]));*/

/*const remove = (arr) => {
   return [...new Set(arr)]
}
console.log(remove([1,2,3,4,4,5,5,29,22,6,6,]));*/

// 14 # Flatten a nested array

/*const flatten = (arr) => {
     
  let flattedItems = arr.flat(Infinity);

  return flattedItems;
}
console.log(flatten([1, 2, [3, 4], [5, [6, 7]]]));*/

/*const flatten = (arr) => {

    let flatedItem = arr.flat(Infinity);

    return flatedItem;
}

console.log(flatten([1,2,3,[8,2,48,[28,4,5,[2,0,47,[3,0,2,4],3,2,4],3,2,],7,[28,3,44,5,83]],]));*/


/*const reduce = (arr) => {
 
  let total = arr.reduce((acc, cr) => acc * cr, 1);

  return total;
}
console.log(reduce([1,2,3,4,5]));*/

/*const reduce = () => {

  let nameArr = ["Akbar","Raza","Ali"];

  let sentence = nameArr.reduce((acc, name) => acc + ", " + name);

  return sentence
} 
console.log(reduce());*/

// 🔹 🧪 Task 1 – Basic Level

/*const reduceTask = (arr) => {
   
  let total = arr.reduce((acc , cr) => acc + cr , 0);

  return total;
}

console.log(reduceTask([10,20,30,40,]));*/

// 🔹 ⚙️ Task 2 – Intermediate Level
// Goal: Multiply all numbers

/*const reduceTask =(arr) => {
  
  let multiple = arr.reduce((value, cr) => value * cr,1);

  return multiple;
}

console.log(reduceTask([2,3,4,5]));*/

/*const reduceTask = () => {

  let student = [
    {name: "Akbar Raza",  marks: 35},
    {name: "Sara",        marks: 75},
    {name: "Usman",       marks: 90},
    {name: "Hina",        marks: 40}
  ];

  let findPassedStudent = student.filter(s => s.marks >= 50);

  let totalMarks = findPassedStudent.reduce((value, i) => value + i.marks , 0);

  console.log(totalMarks.toString());
  
}

reduceTask()*/

// Destructing 

/*let color = ["Green", "Orange","Red"];
let  firstColor = color[0];

console.log(firstColor);*/

/*let color = ["Green", "Orange","Red"];

let [a,b,c] = color;

console.log(b);*/

/*let student = {
  name: "Akbar Raza",
  age: 21
};

let {name , age} = student;

console.log(name);
console.log(age);*/

// 📌 Task 1 – Practice Array Destructuring

/*let student = ["Akbar","Raza",21,"Karachi"];

let [firstName, lastName, age, city] = student;

console.log(firstName,lastName,age,city);*/

//📌 Task 2 – Practice Object Destructuring

/*let product = {
  name:  "Laptop",
  price:  50000,
  brand:  "HP",
  spaces: {
    ram: "16GB",
    storage: "512 SSD",
  }
}

let {name, price, brand,} = product;

let {ram,storage} = product.spaces;
console.log(name,price,brand,ram,storage);*/

//📌 Task 3 – Function Parameter Destructuring

const employ = ({name, department, salary}) => {
  
  return `${name} works is ${department} and earn ${salary}`
  
}

console.log(employ({ name: "Usman", department: "IT",salary: 80000 }));
