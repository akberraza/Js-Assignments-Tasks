// Question # 1

// function showDateTime(){
//     var time = new Date(); 
//     document.getElementById("date").innerText = time;
//     return
// }
// document.write(showDateTime());

// Question # 2

// function name(firstName,LastName){
//   var fullName = firstName + " " + LastName;
//   document.write("Hello " + fullName + " Welcome")
// }
// name("Akbar","Raza")

// Question # 3

// function addNumber(){
//     var num1 = +prompt("Enter any number");
//     var num2 = +prompt("Enter any number");
//     var add = num1 + num2;
//     document.write(add)
//     return add
// }

// addNumber();

// Question # 4

// function calculator(num1,num2,operator){
//     var result;

//     if(operator == "+"){
//         result = num1 + num2
//     }
//     else if(operator == "/"){
//         result = num1 / num2
//     }
//     else if(operator == "-"){
//         result = num1 - num2
//     }
//     else if(operator == "*"){
//         result = num1 * num2
//     }
//     else{
//         result = ("Enter a valid number or operator")
//     }

//     document.body.innerHTML = `<h2>${result}</h2>`
//     return;
// }
// calculator(10,3,"+")

// Question # 5

// function square(x){
//   return x ** 2
// }
// document.write(square(5))

// Question # 6

// function factorialIterative(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//       result *= i;
//   }
//   return result;
// }

// console.log(factorialIterative(5));


// Question # 7

// function displayCounting(start,end){
//   if(start>end){
//     alert("Start number should be less then or equal to end number")
//     return;
//   }
  
//   var output = "<h2>counting</h2>"
//   for(var i=start; i<=end; i++){
//    output += i + "<br>"
//   }

//   document.body.innerHTML = output
// }

// var startNumber = +prompt("Enter any number")
// var endNumber = +prompt("Enter any number")
// displayCounting(startNumber,endNumber)

// Question # 8

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }
    
//     let hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
//     return Math.sqrt(hypotenuseSquared);
// }

// let base = 3;
// let perpendicular = 4;
// console.log("Hypotenuse:", calculateHypotenuse(base, perpendicular));

// Question # 9

// function calculateArea(whidth,height){

//      return whidth * height
// }

// var area1 = calculateArea(10,5);
// console.log(area1);

// var w = 7;
// var h = 3;
// var area2 = calculateArea(w,h);
// console.log(area2);

// Question # 10

// function palindrome(){
//   var user = prompt("Enter any word");
  
//   result = "";
//   for(var i=user.length-1; i>=0; i--){
//    result += user[i];
//   }
  
//   if(result == user){
//     alert("This is a palindorme")
//   }
//   else{
//     alert("This is not a palindorme")
//   }
//   return;

// }

// palindrome();


// Question # 11


// function capitalizeWords(str) {
//   let words = str.split(' ');
//   let result = '';

//   for (let i = 0; i < words.length; i++) {
//       result += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ';
//   }

//   return result.trim();
// }

// let exampleString = 'the quick brown fox';
// document.write(capitalizeWords(exampleString));

// Question # 12

// function findLongestWord(str) {
//   let words = str.split(' ');
//   let longestWord = '';
  
//   for (let word of words) {
//       if (word.length > longestWord.length) {
//           longestWord = word;
//       }
//   }
  
//   return longestWord;
// }

// document.write(findLongestWord('Web Development Tutorial'));

// Question # 13

// function countLetterOccurrences(str, letter) {
//   return str.split(letter).length - 1;
// }

// document.write(countLetterOccurrences('JSResourceS.com', 'o'));

// Question # 14

// function calcCircumference(radius) {
//   let circumference = 2 * Math.PI * radius;
//   console.log(`The circumference is ${circumference.toFixed(2)}`);
// }

// function calcArea(radius) {
//   let area = Math.PI * Math.pow(radius, 2);
//   console.log(`The area is ${area.toFixed(2)}`);
// }

// calcCircumference(5);
// calcArea(5);
