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

const useForEach = () => {

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

useForEach();

