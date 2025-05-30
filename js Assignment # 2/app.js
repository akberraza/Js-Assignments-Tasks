//        Chapter # 8

// Q # 1

// var name1 = prompt("Enter Your name")
// alert("Hi ," +name1)

// Q # 2

// var table = prompt("Enter a num to print its multiplication table",5)
// document.write(
//     `
//     ${table} X ${1} = ${table * 1} <br>
//     ${table} X ${2} = ${table * 2} <br>
//     ${table} X ${3} = ${table * 3} <br>
//     ${table} X ${4} = ${table * 4} <br>
//     ${table} X ${5} = ${table * 5} <br>
//     ${table} X ${6} = ${table * 6} <br>
//     ${table} X ${7} = ${table * 7} <br>
//     ${table} X ${8} = ${table * 8} <br>
//     ${table} X ${9} = ${table * 9} <br>
//     ${table} X ${10} = ${table * 10}
// `
// )


// Q # 3

// var city = prompt("Enter your city")
// var reply = "most welcome Dear"

// if(city === "Karachi"){
//   reply="Welcome to city of Light"
// }

// alert(reply)

// Q # 4

// var gander= prompt("Enter your Gander")
// var message = "Good Morning Ma'am"

// if(gander==="male"){
//   message= "Good Morning Sir"
// }
// alert(message)

// Q # 5

// var color = prompt("Enter signal color")
// var message = prompt("Enter message")
// var red = prompt("red")
// var vehical = prompt("Vehaical must stop")
// var yellow = prompt("yellow")
// var ready =prompt("Vehicles should get ready to move")
// var green = prompt("green")
// var move = prompt("Vahicles move now")


// document.write(
//     `
//     <table border="2px">
//     <tr>
//     <th>${color}</th>
//     <th>${message}</th>
//     </tr>
//     <tr>
//     <td>${red}</td>
//     <td>${vehical}</td>
//     </tr>
//     <tr>
//     <td>${yellow}</td>
//     <td>${ready}</td>
//     </tr>
//     <tr>
//     <td>${green}</td>
//     <td>${move}</td>
//     </tr>
//     </table>
//     `
// )

// Q # 6

// var current = prompt("Enter your current age")
// var max = prompt("Enter your max age")

// if(current <= max){
//     document.write("welcome")
// }

// Q # 7

// var check_Fuel = prompt("Enter your remaining fuel")

// if(check_Fuel < 0.25){
//     document.write("refill fuel")
// }

// Q # 8

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 82){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 12){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 15){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Q # 9

// var userName = prompt("Enter your name")
// var math = +prompt("Enter maths marks")
// var english = +prompt("Enter English marks")
// var urdu = +prompt("Enter urdu marks")
// var obtainedMarks = math + english + urdu
// var total_Marks =300
// var perc =  obtainedMarks / total_Marks* 100
// var remark;
// var grade;

// if(perc >= 80){
//     grade="A-one", remark= "Excellent"
// }
// else if(perc >= 70){
//     grade ="A", remark = "Good"
// }
// else if(perc >= 60){
//     grade ="B", remark = "You need to improve"
// }
// else{
//     grade ="Fail" , remark = "Sorry"
// }


// document.write(
//     `
//     <table border="2px">
//     <tr>
//     <th>NAME </th>
//     <th>Maths</th>
//     <th>English</th>
//     <th>urdu</th>
//     <th>Obtained Marks</th>
//     <th>Percatage</th>
//     <th>Grade</th>
//     <th>Remarks</th>
//     </tr>

//     <tr>
//     <td>${userName}</td>
//     <td>${math}</td>
//     <td>${english}</td>
//     <td>${urdu}</td>
//     <td>${obtainedMarks}/${total_Marks}</td>
//     <td>${perc.toFixed(2)}</td>
//     <td>${grade}</td>
//     <td>${remark}</td>

//     </tr>

//     </table>
//     `
// )

// document.write(
//     `
//    Total marks : ${total_Marks} <br>
//    Marks Obtained : ${obtainedMarks}<br>
//    Percentage : ${perc.toFixed(2)} <br>
//    Grade : ${grade} <br>
//   Reemarks : ${remark}
//     `
// )


// Q # 10

// var name_Of_Item1 = prompt("Enter Name Of Item(01)")
// var price_Of_Item1 = +prompt("Enter Price Of Item(01)")
// var order_Quantity_Of_Item1 = +prompt("Order Quantity Of Item(01)")
// var name_Of_Item2 = prompt("Enter Name Of Item(02)")
// var price_Of_Item2 = +prompt("Enter Price Of Item(02)")
// var order_Quantity_Of_Item2 = +prompt("Order Quantity Of Item(02)")
// var shipping_Charges = +prompt("Enter Shippig Charges")
// var charges1 = price_Of_Item1 * order_Quantity_Of_Item1
// var charges2 = price_Of_Item2 * order_Quantity_Of_Item2
// var total_Charges =charges1 + charges2
// var discount = total_Charges * 10 /100


// document.write(
//     `
//     Price of ${name_Of_Item1} is ${price_Of_Item1} <br>
//     Quantity of ${name_Of_Item1} is ${order_Quantity_Of_Item1}<br>
//     Price of ${name_Of_Item2} is ${price_Of_Item2}<br>
//     Quantity of ${name_Of_Item2} is ${order_Quantity_Of_Item2}<br><br>
//     Shipping Charges: ${shipping_Charges}<br><br>
//     Total coast of your orders is ${total_Charges + shipping_Charges} <br>
//     Discount Price is ${discount}
//     `
// )


// if(total_Charges <= 2000){
//     document.write("You are not Eligible for Discount")
// }
// else{
//     document.write(`Discounted Price is ${total-discount}`);
// }

// Q # 11

// var myNum = 2
// var game = +prompt("Guess Number 1 to 10 ")

// if(game == myNum){
//     document.write("“Bingo! Correct answer”.")
// }
// else{
//     document.write("“Close enough to the correct answer”.")
// }

// Q # 12

// var num = +prompt("Enter any Number")
// // var num2 = num / 3

// if(num % 3 == 0){ 
//     document.write("divide ")
// }
// else{
//     document.write("Not Divide")
// }

// Q # 13

// var team_A = prompt("Team (A) Name")
// var team_A_Score = +prompt("Team (A) Scoure")

// var team_B = prompt(" Team (B) Name")
// var team_B_Score = +prompt("Team (B) Scoure") 

// if (team_A_Score > team_B_Score) {
//     alert(`${team_A}'s is won `)
// }

// else if (team_A_Score == team_B_Score) {
//     alert(`Match is Tie`)
// }
// else if (team_A_Score < team_B_Score) {
//     document.write(`${team_B}'s is win`)
// }

// Q # 14

// var a = "abc"
// var num = 12
// var boolen = true

// alert(`${a} is a ${typeof} `)
// alert(`${num} is a ${typeof}`)
// alert(`${boolen} is a ${typeof}`)

// Q # 15

// var user_Number = +prompt(`Enter your Number`)

// if(user_Number % 2 == 0 ){
//     document.write(`It is a Even Number`)
// }
// else{
//     document.write(`It is a Odd Number`)
// }

// Q # 16

// var teamperature = +prompt("Enter Karachi Teamperature ")

// if(teamperature > 40 ){
//     document.write("“It is too hot outside.”")
// }
// else if(teamperature > 30 ){
//     document.write("“The Weather today is Normal.”")
// }
// else if(teamperature > 20){
//    document.write("“Today’s Weather is cool.”")
// }
// else if (teamperature > 10){
//     document.write("“OMG! Today’s weather is so Cool.”")
// }
// else{
//     document.write("invalid ")
// }

// Q # 17

// var first_Number = +prompt("Enter First Number")
// var Second_Number = +prompt("Enter Second Number")
// var operation = prompt("+ - / * %")

// if(operation == "+" ){
//         alert(` ${ first_Number + Second_Number}your result `)
// }
// else if (operation == "-"){
//     alert(`${first_Number-Second_Number} your result`)
// }
// else if (operation == "/"){
//     alert(`${first_Number / Second_Number} your result`)
// }
// else if (operation == "*"){
//     alert(`${first_Number * Second_Number} your result`)
// }
// else if (operation == "%"){
//     alert(`${first_Number% Second_Number} your result`)
// }
// else{
//     alert("Invalid")
// }

// Q # 18

// var days_Name = prompt("Enter Day Name")

// if(days_Name == "Monday"){
//     alert("“It’s a week day”")
// }

// else if(days_Name == " Tuesday"){
//     alert("“It’s a week day”")
// }

// else if(days_Name == "Wednesday"){
//     alert("“It’s a week day”")
// }

// else if(days_Name == "Friday"){
//     alert("“It’s a week day”")
// }
// else if(days_Name == "Saturday"){
//     alert("“It’s weekend”")
// }
// else if (days_Name == "Sunday"){
//     alert("“Yay! It’s a holiday”")
// }
// else{
//     alert("Invalid")
// }

// Q # 19

// var score = +prompt("Enter Your  scoure")

// if(score > 50){
//     alert("Your are Passed")
// }
// else{
//     alert("Try again")
// }

// Q # 20

//  var num1 = +prompt("Enter first Number ")
//  var num2 = +prompt("Enter Second Number ")

//  if(num1 < num2){
//     document.write(`${num2} is the Greater ${num1}`)
//  }
//  else if (num1 > num2){
//    document.write(`${num1} is the Greater ${num2}`)

//  }
//  else if(num1 == num2){
//    document.write(`${num1} is ${num2} equal`)

//  }
//  else{
//    document.write("Invalid")
//  }

// Q # 21

// var language = prompt("Enter Hello world in 3 languages")

// if(language == "Hello World"){
//    alert("Hello Wrold")
// }

// else if(language == "ہیلو دنیا"){
//    alert("ہیلو دنیا")
// }

// else if(language == "Selam Dünya"){
//    alert("Selam Dünya")
// }
// else{
//    alert("Invalid")
// }

// Q # 22

// var num = +prompt("Enter Number")

// if(num > 0){
//     document.write(`This ${num} is positive`)
// }
// else if (num < 0){
//     document.write(`this ${num} is Negative`)
// }
// else{
//     document.write(`"The number is zero, which is neither positive nor negative.")`)
// }

// Q # 23

// var noun = prompt("Enter Name path")
// var num = +prompt("Enter contatie")
// alert(`${num} ${noun}`)

//               chapter # 12 13


// Q # 01

// var num = +prompt("Enter number")

// if(num % 3 == 0 ){
//     document.write(` ${num} is divisible by 3`)
// }

// Q # 02

// var num1 = +prompt("Enter number")

// if(num1 % 2 == 0 ){
//     document.write(`${num1} is even `)
// }
// else{
//     document.write(`${num1} is Odd`)
// }

// Q # 03

// var age = +prompt("Enter your age")

// if(age > 18 ){
//     document.write("Old enough")
// }
// else{
//     document.write("Too Young")
// }

// Q # 04

// var name1 = prompt("Enter your Name")

// if(name1 === "Akbar Raza"){
//     document.write(`${name1} Greater name`)
// }

// Q # 05

// var num = +prompt("Enter number")

// switch(true){
//     case (num % 3 == 0):
//     document.write("“Number is divisible by 3”")
//     break;

//     default:
//         document.write("“Number is not divisible by 3”")
// }

// Q # 06

// var string = "string"
// var num = 1

// document.write(`${string} is a ${typeof(string)} `)
// document.write(`${num} is a ${typeof(num)} `)

// Q # 07

// var num1 = +prompt("Enter Number")
// var num2 = +prompt("Enter Number")
// var operation = prompt("operation + - / * %");

// switch(true){
//     case (operation  == "+"):
//     document.write(`${num1 + num2 } is your answer`)
//     break;
//     case (operation == "-"):
//     document.write(`${num1 - num2} is your answer`)
//     break;
//     case (operation == "/"):
//     document.write(`${num1 / num2
//     } is your answer`)
//     break;
//     case (operation == "*"):
//     document.write(`${num1 * num2} is your answer`)
//     break;
//     case (operation == "%"):
//     document.write(`${num1 % num2} is your answer`)
//     break;
//     default:
//         document.write("Invalid Operater")
// }

// Q # 08

// var time = +prompt("Enter time")

// if(time >= 1200 && time <1200){
//          document.write("Good Morning")
// }
// else if (time >= 1200 && time < 1700 ){
//     document.write("Good After Noon")
// }
// else if(time >= 1700 && time <2100){
//     document.write("Good Evening")
// }
// else if(time >= 2100 && time < 2359){
//     document.write("Good Nignt")
// }
// else{
//     document.write("Time is Invalid")
// }

// Q # 09

// var year = +prompt("Enter leap year ")

// if(year % 4 == 0){
//     document.write("It is a leap Year ")
// }
// else{
//     document.write("It is Not a Leap year")
// }

// Q # 10

// var correct_Password = "Akbar Raza"
// var password = prompt("Enter Your Password")

// if(password == ""){
//     alert("“ Please enter your password”")
// }
// else if(password == correct_Password){
// alert("“Correct! The password you entered matches the original password”.")
// }
// else {
//     alert("Incorrect Your Password")
// }

// Q # 11

// var firstName = "Ali";
// if (firstName === "Fahad") {
// document.write("Hello Fahad!");
// }
// else{
//     document.write("“You are not Fahad”")
// }

// Q # 12

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }

// Q # 13

// var integer1 = +prompt("Enter Integer Number 1")
// var integer2 = +prompt("Enter Integer Number 2")

// if(integer1 > integer2){
//     document.write(`${integer1} is Geater ${integer2}`)
// }
// else if(integer1 == integer2){
// document.write(`${integer1} is equal ${integer2}`)
// }





// //Q14

// var num3 = +prompt("Enter any number");

// if (isNaN(num3)) {
//     document.write("Invalid Value");
// }
// else if (num3 > 0) {
//     document.write(`The number ${num3} is Positive`);
// }
// else if (num3 < 0) {
//     document.write(`The number ${num3} is Negative`);
// }
// else {
//     document.write(`The number is ${num3}, which is neither positive or negative.`);
// }


// //Q15

// var hour = +prompt("Current Hour");

// if (hour >= 6 && hour <= 9) {
//     document.write("Breakfast is served");
// }
// else if (hour >= 11 && hour <= 13) {
//     document.write("Time for lunch");
// }
// else if (hour >= 17 && hour <= 20) {
//     document.write("It's dinner time");
// }
// else {
//     document.write("Sorry, you'll have to wait, or go get a snack.")
// }


// //Q16

// var a = "Faraz";
// var b = 99;
// var c = true;
// var d;

// document.write(`${a} is a ${typeof (a)}<br>`);
// document.write(`${b} is a ${typeof (b)}<br>`);
// document.write(`${c} is a ${typeof (c)}<br>`);
// document.write(`${d} is a ${typeof (d)}<br>`);


// //Q17

// var word = prompt("Please enter any character");

// if (word == "a" || word == "e" || word == "i" || word == "o" || word == "u") {
//     document.write(`"True! ${word} It's a vowel"`);
// }
// else {
//     document.write("False");
// }


// //Q18

// var no1 = 10;
// var no2 = 7;
// if (no1 != no2) {
//     document.write(`${no1} is not equal to ${no2}`);
// }


// //Q19

// var month = +prompt("Please enter month number");

// switch (month) {
//     case 1:
//         document.write("January");
//         break;
//     case 2:
//         document.write("February");
//         break;
//     case 3:
//         document.write("March");
//         break;
//     case 4:
//         document.write("April");
//         break;
//     case 5:
//         document.write("May");
//         break;
//     case 6:
//         document.write("June");
//         break;
//     case 7:
//         document.write("July");
//         break;
//     case 8:
//         document.write("August");
//         break;
//     case 9:
//         document.write("September");
//         break;
//     case 10:
//         document.write("October");
//         break;
//     case 11:
//         document.write("November");
//         break;
//     case 12:
//         document.write("December");
//         break;
//     default:
//         document.write("Invalid month number.");
// }


// //Q20

// var age = 19;
// var voteAble = age < 18 ? "Too young" : "Old enough";
// document.write(voteAble);



