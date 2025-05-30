// Question # 01

// var firstName = prompt("Enter your First Name");
// var LastName = prompt("Enter Your Last Name");
// var fullName = firstName + LastName;
// console.log(fullName)

// Question # 02

// var user = prompt("Enter your Favorite Mobile phone");
// document.write(`My favorite phone is ${user} <br> Lenght of string: ${user.length}`);

// Question # 03

// var str = "Pakistani";
// document.write(`String ${str} <br> Index of 'n' is : ${str.indexOf("n")}`)

// Question # 04

// var str = "Hello World";
// document.write(`String : ${str} <br> Last Index of 'l' : ${str.lastIndexOf("l")}`)

// Question # 05

// var firstName = prompt("Enter Your  First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(lastName);
// document.write(fullName);

// Question # 06

// var str = "Hyderabad";
// document.write(`City ${str} <br> After replacement: ${str.replace("Hyder","Islam")}`);

// Question # 07

// var str = ("Ali and Sami are bestfriends. They play circket and football togather");
// document.write(`Message : ${str} <br> After replacement : ${str.replaceAll("and","&")}`);

// Question # 09

// var num = "472"
// document.write(`value : ${num} <br> Type : ${typeof(num)} <br> Value : ${num} <br> Type : ${typeof(+num)} `)

// Question # 10

// var user = prompt("Enter fackbook");
// document.write(`URL : ${user} <br> Domain : ${user.replace("www.","")}`);

// Question # 11

// var user = "peanuts";
// document.write(`User input : ${user} <br> Upper Case : ${user.toUpperCase()}`)

// Question # 12

// var user = "ZONG 4G";
// document.write(`User input : ${user} <br> Lower Case : ${user.toLowerCase()}`)

// Question # 13

// var str = "javascript";

// for(var i =0; i<str.length; i++){
//     var a = str[0].slice(0.1).toUpperCase();
//     var b = str.slice(1).toLowerCase();
//     var final= a+b 
// }
//  document.write(`User input : ${str} <br> Title case : ${final}`)

// Question # 14

// var num = "35.36";
// document.write(`Number : ${num} <br> Result : ${num.toString().replace(".","")}`)

// Question # 15

// var a = "3";
// var b = "3";
// var x = a + b;
// document.write(`a is ${a} <br> b is ${b} <br>  a + b = ${x}`)

// Question # 16
 
// var a = "3";
// var b = "3";
// var y = a - b ;
// document.write(`a is ${a} <br> b is ${b} <br> a - b = ${y}`)

// Question # 17

// var name1 = prompt("Enter your name");
// var speical  = ["@","!",",",".","&"];
// var valid = true;

// for(var i =0; i<name1.length; i++){
// if(speical.includes(name1[i])){
//   valid = false;
//   break;
// }
// }
// if(!valid){
//     alert("Invalid Name")
// }
// else{
//     alert("Your name is valid")
// }

// Question # 18

// var user = prompt("Enter any bakery itme").toLowerCase();
// var items = ["cake","apple pie","chips","cookie","patties"];

// if(items.includes(user)){
//     alert(`${user} is available at index of ${items.indexOf(user)} in our bakery`)
// }
// else{
//     alert(`we are sorry ${user} is not avaliable in our bakery`)
// }

// Question # 19

// var user1 = prompt("Enter any thing");
// var user2 = prompt("Enter any THing");

// if(user1 < user2){
//     alert(`${user1} is greater then ${user2}`)
// }
// else if(user1 > user2){
//     alert(`${user1} is less then ${user2}`)
// }
// else{
//     alert(`${user1} and ${user2} are both equal`)
// }

// Question # 20


// var password = prompt("Enter your password");

// if(password.length >=8 && isNaN(password[0]) && /[a-zA-z]/.test(password) && /[0-9]/.test(password) && /[@ ! # & %]/.test(password)){
//     alert("Your password is valid!")
// }
// else{
//     alert("your password is invalid")
// }

// Question # 21

// var university = "University of Karachi";
// var arry = university.split("");

// for(var i =0; i<arry.length; i++){
//     document.write(arry[i] + "<br>")
// }

// Question # 22

// var userinput = prompt("Enter any word");
// var lastCharacter = userinput[userinput.length -1]
// alert("Last character of input : " + lastCharacter);

// Question # 23

// var str = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var count = str.split("the").length -1;

// document.write(`Text : The quick brown fox jumps over the lazy dog <br> There are ${count} occurrence(s) of word 'the'`)



// practice


// var user = prompt("Enter your name");
// var speical= "!@#$%&";
// var valid = true;

// for(var i =0; i<user.length; i++){
//     if(speical.includes(user[i])){
//         valid=false;
//         break;
//     }
    
    
// }
// if(!valid){
//     alert("Enter valid Name")
// }
// else{
//     alert("Your name is valid")
// }


// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Enter bakery itme").toLowerCase();

// if(items.includes(user)){
//     alert(`${user} is availabe at index of ${items.indexOf(user)} in our bakery `)

// }
// else{
//     alert(`we are sorry ${user} is not avaliable in our bakery`)
// }



// var thing1 = prompt("Enter any thing ");
// var thing2 = prompt("Enter any thing ");

// if(thing1 < thing2){
//     alert(`${thing1} is Greater then is ${thing2}`)
// }
// else if(thing1 > thing2){
//     alert(`${thing1} is less then ${thing2}`)
// }
// else if(thing1 == thing2){
// alert(`both are equal `)
// }


// var password = prompt("Enter password");

// if (password.length<=8 && isNaN(password[0]) && /[a-zA-Z]/.test(password) && /[@#$%&]/.test(password)){
//     alert("Your password is valid")
// }
// else{
//     alert(`Enter password :${password} /n Password can not begin with a number /n please enter a valid password`)
// }



// var university = "University of Karachi";
// var convert = university.split("");

// for(var i =0 ; i<convert.length; i++){
//     document.write(convert[i] + "<br>")
// }



// var userInput = prompt("Enter any Word");
// var lastCharacter = userInput[userInput.length -1];

// document.write(`User Input :${userInput} <br> Last Character of input ${lastCharacter}`)



// var text = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var convert = text.split("the").length-1;

// document.write(`Text : ${text} <br> There are ${convert} occurrence(s) of words 'the'`)