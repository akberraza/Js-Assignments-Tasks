// 150 Questions  Praperation

// Q # 01
// alert("Hello World");

// Q # 02
// var username = "John"

// Q # 03
// console.log(typeof null)  is object

// Q # 04
/*function square(num){
   return num * num
}
console.log(square(7));*/

// Q # 05
// == srif value check karta ha or === value k sath data type bhi check karta ha.

// Q # 06
// var colors = ["red","green","blue"];

// Q # 07
/*var arr = ["red","green"];
arr.push("blue");
push ka method kisi bhi value ko array k last sa add kar dayta ha*/

// Q # 08
// hoisting javascript ma compile ho na sa phala hi variables and functions ko top par lay jata ha lakin inetilizi nh karta  
// console.log(a);
// var a = "Hello"
// console.log(a);
// let a = 5

// Q # 09
/*for(var i =1; i <= 5; i++){
  console.log(i);
}*/

// Q # 10
// break break lagana ka liya hota ha for example loop chalana 5 or ham na console karwana  ka bad break laga dya to srif 1 time print ho ga.
// for(var i=0 ; i<=5; i++){
//   if(i == 3){
//     console.log(i);
//     break;
//   }
// }

// // Q # 11 
// var num = "123";
// console.log(+(num))

// Q # 12
// NaN ki type number 
// console.log(typeof NaN)

// Q # 13
// function find(num){
//     if(num % 2 == 0){
//       return "Even"
//     }
//     else{
//       return "Odd";
//     }
// }
// console.log(find(99));

// Q # 14
// var arr = ["Apple","Banana"];
// arr.unshift("Ghraps");
// console.log(arr);
/*var arr = ["Apple","Banana"];
var newElement = "Graphs";
var newArr = [newElement];
for(var i = 0; i < arr.length; i++){
     newArr[newArr.length] = arr[i];
}
console.log(newArr)*/

// Q # 15
// null or undifined dono primitive types ha or dono falsy values ha
// null ka matlab ha empty ya intentional non-value
// undefined ka matlab ha us ma koi value assign nh huwi 
/*var a; 
console.log(a);// undefined
var b = null;
console.log(b);//null*/

// Q # 16
/*var age = 20;
if(age > 18){
  console.log("Age is Greater then 18");
}else{
  console.log("Age is less then 18");
}*/

// Q # 17
// return ka keyword ka use function ka andar sa kisi value ko bahar bhene(output dene) k liya hota ha, taka app function ka bhair use kar sako;

// Q # 18
/*var str = "Hamza Akhtrli";
var count = 0;
for(var i = 0; str[i] !== undefined; i++){
  count++;
}
console.log(count)*/

// Q # 19
// splice ek array method ha  jo arry ma khin bhi replace,remove,add kar sakta ha
// Example Remove Element;
/*var arr = ["Apple","Banana","Grapes"];
arr.splice(1,1);
console.log(arr);*/

// Example Add Element;
/*var fruits = ["Apple","Grapes"];
fruits.splice(1,0,"Banana");
console.log(fruits);*/

// Example Replace Element;
/*var fruits = ["Apple","Banana","Grapes"];
fruits.splice(2,2,"Orange");
console.log(fruits);*/

// Q # 20
// var function scope hota ha agar function ka bhair ho to global scope ban jata ha
// let block scope hota ha 
// const bhi block scope hota ha, lakin is ki value change nh kar sakta

// Q # 21
/*var days = "Saturday";
switch(days){
  case "Saturday":
    console.log("To Day is Saturday");
    break
    case "Tuesday":
      console.log("To Day is Tuesday");
      break
}*/

// Q # 22
//console.log(0.1 + 0.2 == 0.3)// false

// Q # 23
// console.log(Math.floor(Math.random() * 10));

// Q # 24
//console.log(typeof 10);// typeof keyword kisi bhi element ki type pata karna k liya use hota ha.

// Q # 25
/*function foo(){
return "Hello"
}
console.log(foo())*/

// Q # 26
/*function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Passing 'sayGoodbye' as a callback to 'greet'
greet("Ali", sayGoodbye);*/

// Q # 27
/*var items = ["Mango","coconut","Pinapple"];
items.length = items.length - 1;
console.log(items);*/

// Q # 28
// slice copy karta ha 
// splice 3 kaam karta ha khain bhi add/remove/replace karta ha
/*var things = ["AirPlane","Ak47","9mm"];
var copyThings = things.slice(1);
console.log(copyThings);*/
// Addinng item
/*var items = ["Bottle","Cooler","Frezer"];
items.splice(1,0,"Jug");
console.log(items)*/
// Removing Items
/*var items = ["Bottle","Cooler","Frezer"];
items.splice(1,1);
console.log(items);*/
// Replaceing items
/*var items = ["Bottle","Cooler","Frezer"];
items.splice(1,1,"Tab");
console.log(items);*/

// Q # 29
/*var num = 10;
console.log(num + "");*/

// Q # 30
/*var str = "Akbar";
console.log(isNaN(str));*/ // true
/*var num = true;
console.log(isNaN(num));*/ // false

// Q # 31
/*var i = 1;
while(i <= 10){
  console.log(i);
  i++;
}*/

// Q # 32
// forin loop in object
/*var student = {
  name : "Akbar Raza",
  class: "Intermediate",
  age: 21
}
for (var key in student) {
console.log(key,student[key]);
}*/
// forin loop in arry
/*var arr = ["A","B","C"];
for (var key in arr) {
    console.log(key,arr[key]);
}*/

// Q # 33
/*var person = {
  name: "Akbar Raza",
  age: 21
}
for (var key in person) {
 console.log(key,person[key]);
}*/

// Q # 34
// this javascript ma ek specail keyword hota ha jo current context / object ko refer karta ha___ matlab jis jhagha ya object ke ander aap ka code chal raha hota ha.

// Q # 35
/*var detail = {
  name: "Akbar Raza",
  greet: function(){
    console.log("How are You " + this.name);
  }
}
detail.greet()*/

// Q # 35
// Primitive Defination
//  ya wo type hoti ha jo value ko directliy store kar sakti ha.
// in ki copy banai jasakti ha .
// jab aap ek variable ko dusra variable ma assigin karta ho, to srif value copy hoti ha link nh banti.
// ya memory ma alag alag jhagha store hoti ha.
