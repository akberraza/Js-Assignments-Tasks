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

// Q # 36
// Primitive Defination
//  ya wo type hoti ha jo value ko directliy store kar sakti ha.
// in ki copy banai jasakti ha .
// jab aap ek variable ko dusra variable ma assigin karta ho, to srif value copy hoti ha link nh banti.
// ya memory ma alag alag jhagha store hoti ha.
/*var a = 10;
var b = a;
b = 20
console.log(a);
console.log(b);*/


// Refrence Type(Object type)
// ya wo type ha jo value ki bajaya refrence ko store karti ha__ yani memory ka address.
//jab aap kisi object ko assign karta ho, to actual object ki copy nh hoti, balka us ka refrence(address) copy hota ha.
// Agar app aik jagha change karta ho, to wo har jagha reflect hota ha jahan jahan refrence ko use kya gya ho
/*var obj1 = {
  name: "Akbar"
}
var obj2 = obj1;
obj2.name = "Hamza";
console.log(obj1.name);
console.log(obj2.name);*/

// Q # 37
/*var arr = ["Beif","Chicken","Metton"];
var find = "No"
for(var i = 0; i< arr.length; i++){
  if(arr[i] === "Metton"){
    find = "Yes"
    break
  }
}
console.log(find);*/

// Q # 38
// function ki data type function ha
/*function foo(){
}
console.log(typeof foo);*/

// Q # 39
// javaScript ma kisi event ka default behaivor rokna k liya ham prenentDefault() method ka use karta ha
/*function handler(a){
   a.perventDefault();
   console.log('Linked click, but navigation Stoped');
}*/

// Q # 40
// Event bubbling javascript ka ek concept ha jaha event sabsa phala inner element par trigger karta ha, phir uska parent,phir uske parent aur asa hi upar tak propagate karta hai.
// jab ap kisi nested element par event(jaisa onclick) lagata ho to
// sab sa phala wo element react karta ha.
// us ka baad us ka parent
// phir us ka parent ka  parent--- aur ya process document tak chalta ha.
// is  bheivor ko event bubbling khata ha --- kyu ka event bubble ki tarha upar utha ha.

// Q # 41
/*function stopPropagation(a){
a.stopPropagation();
console.log("Only button clicked!")
}*/

// Q # 42
// synchronous 
// code ko line by line read karta ha.
// jab tak phala kaam complete na ho jaya agla kaam nh chalta.
/*console.log("Start");
var result = slowFunction();
console.log("End");*/

// asynchronous  
// code rutha nh ha background ma kaam chalta rahata ha.
// Asa function ka use hota ha jo bad ma  complete hota ha.
/*console.log("Start");
setTimeout(function(){
  console.log("Task complete!");
},1000);
console.log("End");*/

// Q # 43
/*try{
var result = 5 / 0;
console.log("Result: " + result);
var x =  y + 1;
}catch(error){
console.log("Error aya : " + error.message);
}*/

// Q # 44
/*var getDate = new Date()
document.writeln(getDate);*/

// Q # 45
// setTimeout javascript ka ek built-in function ha jo kisi function ko delay ka  bad rune karna k liya use hota ha.

// Built-in function
// built-in function woh hota ha jo javascript khud provide karti ha, user srif us ko use karta ha, banata nh ha.

// Q # 01
// alert("Hello") likhna sa ek pop up open hota ha

// Q # 02
// var x = 5; kyun k es5 ma srif var hi tha let aur const es6 ma aya ha.

// Q # 03
// console.log(typeof 123);// output is number

// Q # 04
// prompt("Name?")// input field k upar show ho ga.

// Q # 05
// if(a == "5")// ya srif value check kar raha.
// if(a === "5") ya value aur data type dono check karta ha

// Q # 06
// function square(n) { return n*n; } return ka keyword kisi bhi value bhair bhajta ha is liya return zaroori ha.

// Q # 07
/*var str = 10;
var i =0;
while( i < str){
  i++;
}*/

// Q # 08
/*for(var i = 0; i < 5; i++){
  console.log(i);// output is 01234
}*/

// Q # 09
/*var arr = [1,2,3];
arr.push(4)// output is [1,2,3,4]
// push ka method arry ka last ma ek is element ko add kar day ga jo push ka  parenttheses ma dya gya ha*/

// Q # 10
/*var arr = [1,2,3];
arr.pop()// pop arry ka last index ka element ko remove kar day ga.*/

// Q # 11
// splice ka method 3 kaam karta ha add/remove / replace.
// example add
/*var arr =[1,2,3,4];
arr.splice(0,0,0);
console.log(arr);*/

// example remove
/*var arr = [1,2,3,4];
arr.splice(1,2);
console.log(arr);*/

// example replace
/*var arr = [1,2,3,4,5];
arr.splice(1,2,0);
console.log(arr);*/

// Q # 12
// slice srif copy karta ha aur splice add / remove / replace karta ha.
/*var arr = ["Akbar","Raza","Hamza","Asjadi"];
var arr2 = arr.slice(0,1);
console.log(arr);
console.log(arr2);*/

// Q # 13
/*var obj = {
  a: 1,
  b: 2
}
console.log(obj.a);// output is 1*/

// Q # 14
/*var obj = {
  name: 'Akbar',
  age: 21,
}
for (var key in obj) {
      console.log(key);// output name age.      
}*/

// Q # 15
// math.floor decimal hata dayta ha
/*var num = 10.0000;
console.log(Math.floor(num)); // output  10*/

// Q # 16
// math.random random number generate karta ha
// console.log( Math.random() * 11);

// Q # 17
// new date current date return karta ha
/*var getDate = new Date();
console.log(getDate);*/

// Q # 18
// console.log(isNaN("abc"));// true return karya ga

// Q # 19
/*console.log(parseInt("12px"));// 12
console.log(parseInt("px12"));// NaN*/

// Q # 20
// console.log(parseFloat("3.14xyz"));//3.14

// Q # 21
/*var str = "Hello";
console.log(str.length);//5*/

// Q # 22
/*var str = "Hello";
console.log(str.indexOf("e"));//1*/

// Q # 23
/*var str = "Hello";
console.log(str.substring(1,3));// output el*/

// Q # 24
/*var str = "Hello Akbar Raza";
console.log(str.split(" "));*/

// Q # 25
/*var str = "akbar raza";
console.log(str.toUpperCase());// output AKBAR RAZA*/

// Q # 26
// trim ka method string ka start aur end sa khail space delete karna k liya use hota ha.
/*var str = "      Akbar Raza     ";
console.log(str.trim());*/

// Q # 27
// console.log(!true);// false

// Q # 28
/*if(!!"text"){
  console.log("True"); // true
}else{
  console.log("False");
}*/

// Q # 29
// console.log(undefined == null);// true

// Q # 30
// console.log(null === undefined);// false

// Q # 31
/*var a = [];
console.log(typeof a);// object*/

// Q # 32
// console.log(typeof function foo(){});// function

// Q # 33
/*function foo(a,b){
return a + b // 5
}
console.log(foo(2,3));*/

// Q # 34
// var a = "Akbar"

// Q # 35
// local variable function k andar banaya jata ha jo srif function k andar hi access ho sakta ha function k bhair access nh karta;
// global variable khain bhi access ho jata ha chaha function ha ya block har jhaga acess ho jata ha 

// local variable
/*function foo(){
  var a = "Akbar";
}
console.log(a);// not access refrence error return kara ga.*/

// Global variable
/*var a = "Akbar";
function foo(){
 return a ; // a access ho gya Akbar return karya ga
}
console.log(foo());*/

// Q # 36
// hoisting javascript complie hoona sa phala hi variables  aur function ko  memory ma top par lajata ha par initilize nh karta.
// console.log(a); // undefined return karya ga
// var a = "Raza"

// Q # 37
// settimeout 2sec bad alert chala ga jis ma Hi likha ho ga
/*setTimeout(function(){
  alert("Hi")
},2000);*/

// Q # 38
// clearTimeout settimeout ko rokna k liya ho ha exp ek alert ha aur wo 3 sec bad show ho ga aur hamna clearTimeout laga dya to wo alert nh chala ga.
/*var id = setTimeout(function(){
  alert("Hi!");
},2000);
clearTimeout(id);*/

// part 1

// Q # 01
// console.log(typeof NaN);//number

// Q # 02
// console.log("2"+2+1);// 221

// Q # 03
// Boolen(0) true return karya ga kyu k 0 false value ha.
// Boolen("0") false return karya ga kyu k string boolen nh hoti is liya false return karyaga

//  Q # 04
// console.log(parseInt('08')); // 8
// console.log(parseInt("08",10)); // 8

//  Q # 05
// console.log(null +  1); // output 1

// part 2

// Q # 1

/*function reverseString(){
   var str = "JavaScript";
   var final = "";

   for(var i = str.length-1; i >= 0; i--){
   final += str[i];
   }
   return final;
}
console.log(reverseString());*/

// Q # 2

/*function checkPalindrom(){
var str = "akbar";
var check = "";

for(var i = str.length-1; i>=0; i--){
  check += str[i];
}

if(str === check){
   console.log("This is  a palindrom");
}else{
  console.log("This is  not a palindrom");
}
}
checkPalindrom()*/
