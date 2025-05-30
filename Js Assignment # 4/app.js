//    Chapter # 19

// Question # 1

// for(var i=1; i<=5; i++){
//     document.write("Hello World" + "<br>")
// }

// Question # 2

// for(var i=1; i<=10; i++){
//     document.write(i + "<br>")
// }

// Question # 3

// var num1 = prompt("Enter Number for table");
// var num2 = prompt("Enter number");

// for(var i=1; i<=num2; i++){
//     document.write(`${num1} x ${i} = ${num1 * i} <br>`)
// }

// Question # 4

// var mobiles = ["Nokia","Apple","Samsung","Sony","Huawei"]

// for(var i=0; i<mobiles.length; i++){
//     document.write(mobiles[i] + "<br>")
// }

// Question # 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i=0; i< fruits.length; i++){
//     document.write(`${fruits[i]} <br>`)
// }

// Question # 6

// var num1 = +prompt("Enter any number");
// var num2 = [];

// for(var i = 0; i < num1; i++){
//     var num3 = prompt(`Enter  items names `)
//     num2.push(num3)
// }

// document.write(`Number of items: ${num1} <br> items: <br>`)
// for(var i =0; i < num1; i++){
//     document.write(num2[i] + "<br>")
// }



// Question # 7
  
// counting

// for(var i=1; i<=10; i++){
//     document.write(i)
// }

// reverse

// for(var i = 10; i > 0; i--){
//     document.write(i + ",")
// }

// even

// for(var i=2; i<=10; i= i+2){
//     document.write(i+"<br>")
// }

// Odd

// for(var i = 0; i<=10; i=i+3){
//     document.write(i + "<br>")
// }


// for(var i=3; i<=10; i = i+3){
//         document.write(i + "<br>")
//     }


// for(var i = 2; i <= 20; i=i+2){
//     document.write(i +"k" + ",")
// }



// Question # 8


// var itmes = ["cake" , "chips" , "apple pie" , "cookies"];
// var itme1 = prompt("Enter item name ").toLowerCase();

// if(itmes.includes(itme1)){
//     alert(`${itme1} is avilable in list`)
// }else{
//     alert(`sorry ${itme1} is not avilable in list`)
// }

// Question # 9

// var nums = [24, 53, 78, 91, 12,];
// document.write(Math.max(...nums));

// Question # 10


// document.write(Math.min(...nums))

// Question # 11

// var  nums = [24, 53, 78, 91, 12,];

// document.write(`The smallest Number is ${Math.min(...nums)} <br> the Largest Number is ${Math.max(...nums)}`)


// Question # 12

// for(var i = 5; i <=100; i=i+5){
//     document.write(i + ",")
// }

// Question # 13

// var Student = ["Ali" , "Sami" , "Taha" , "Inam"];
// var score = [58,73,89,90,85];
// var table = `
// <table border="1">
// <tr>
// <th>Students</th>
// <th>Score</th>
// </tr>
// `
// for(var i = 0; i < Student.length; i++){
//     table += `
//     <tr>
//     <td><center>${Student[i]}</center></td>
//     <td><center>${score[i]}</center></td>
//     </tr>
//     `
// }

// table += "</table>";
// document.write(table);


// Question # 14

// var score = [12, 45, 3, 22, 34, 50];
// var user = +prompt("Enter number");
// var desireValue = [];

// for(var i = 0; i<score.length; i++){
//     desireValue.push(score[i])
//     if(user == score){
//         break;
//     }
// }

// if(score.includes(user)){
//     document.write(desireValue)
// }
// else{
//    document.write(inValid)
// }
