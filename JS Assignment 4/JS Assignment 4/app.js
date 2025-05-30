// //Q1

// for (var i = 1; i < 6; i++) {
//     document.write(i + " Hello World <br>");
// }


// //Q2

// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }


// //Q3

// var num = +prompt("Which table do you want to perform");
// var length = +prompt("How long do you want to perform the table");
// document.write(`Multiplication table of ${num} <br> Length ${length} <br><br>`);

// for (var i = 1; i <= length; i++) {
//     document.write(`${num} x ${i} = ${num * i} <br>`);
// }


// //Q4

// var phone = ["“Nokia”", "“Samsung”", "“Apple”", "“Sony”", "“Huawei”"];

// for (var i = 0; i < phone.length; i++) {
//     document.write(phone[i] + "<br>");
// }


// //Q5

// var fruits = ["“apple”", "“banana”", "“mango”", "“orange”", "“strawberry”"];

// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }

// for (var i = 0; i < fruits.length; i++) {
//     document.write(`Element at ${i} is ${fruits[i]} <br>`);
// }


// //Q6

// var NoOfitems = +prompt("Enter number of items");
// var arr = [];

// for (var i = 0; i < NoOfitems; i++) {
//     var item = prompt("Please enter item" + [i + 1]);
//     arr.push(item);

// }
// document.write(`Number of items ${NoOfitems} <br> <br>`)

// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }


// //Q7
// document.write("Counting: <br>");
// for (var i = 0; i < 16; i++) {
//     document.write([i] + ", ");
// }

// document.write(" <br><br> Reverse Counting: <br>");
// for (var i = 10; i >= 1; i--) {
//     document.write([i] + ", ");
// }

// document.write(" <br><br> Even: <br>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write([i] + ", ");
// }

// document.write(" <br><br> Odd: <br>");
// for (var i = 1; i <= 20; i += 2) {
//     document.write([i] + ", ");
// }

// document.write(" <br><br> Series: <br>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write([i] + "k" + ", ");
// }


// //Q8

// var foodItem = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user_input = prompt("Welcome to ABC Bakery\nWhat do you want to order?");
// var found = false;

// if (foodItem.includes(user_input)) {
//     document.write(`${user_input} is available at ${foodItem.indexOf(user_input)} in our bakery`);
// } else {
//     document.write(`Sorry, ${user_input} is not available  in our bakery`);
// }

//    Another Solution

// for (var i = 0; i < foodItem.length; i++) {
//     if (foodItem[i] == user_input) {
//         found = true;
//     }
// }

// if (found) {
//     document.write(`${user_input} is available at ${foodItem.indexOf(user_input)} in our bakery`);
// } else {
//     document.write(`Sorry, ${user_input} is not available  in our bakery`);
// }


// //Q9

// var nums = [24, 53, 78, 91, 12,];
// console.log(Math.max(...nums));


// //Q10
// console.log(Math.min(...nums));


// //Q11

// document.write(`Array item: ${nums} <br>The smallest number is ${Math.min(...nums)} <br> The largest number is ${Math.max(...nums)}`);


// //Q12

// for (var i = 5; i <= 100; i += 5) {
//     document.write(i + ", ");
// }


// //Q13

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// var table = `<table border="1">
//     <tr>
//         <th>Student</th>
//         <th>Score</th>
//     </tr>`

// for (var i = 0; i < students.length; i++) {

//     table += `<tr>
//         <td>${students[i]}</td>
//         <td>${scores[i]}</td>

//     </tr>`
// }

// table += "</table>";
// document.write(table);


// //Q14

// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = +prompt("Enter a number");
// var desireValue = [];

// for (var i = 0; i < scores.length; i++) {
//     desireValue.push(scores[i]);

//     if (scores[i] == stopValue) {
//         break;
//     }
// }

// if (scores.includes(stopValue)) {
//     document.write(desireValue);
// }
// else {
//     document.write("Invalid Value");
// }


// //Q15

// var a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (var i = 0; i < a.length; i++) {
//     for (var j = 0; j < a[i].length; j++) {
//         document.write(a[i][j])
//     }
//     document.write("<br>");
// }


// //Q16

// var user_input = +prompt("Enter a number");

// for (var i = 5; i >= 0; i -= 0.5) {
//     document.write([i] + ", ");
// }


// //Q17

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write([i] + " is even <br>");
//     }
//     else {
//         document.write([i] + " is odd <br>");
//     }
// }


// //Q18

// var product = 1;

// for (var i = 1; i <= 7; i += 2) {
//     product *= [i];
// }

// document.write(product);


// //Q19

// var user_input = +prompt("How many stars length you want to draw?");

// for (var i = user_input; i >= 1; i--) {
//     for (var j = i; j >= 1; j--) {
//         document.write("*" + " ");
//     }
//     document.write("<br>");
// }


// //Q20

// var user_input = +prompt("How many line of stars do you want to draw?");

// for (var i = 1; i <= user_input; i++) {
//     for (var j = 1; j <= 5; j++) {
//         document.write("*" + " ");
//     }
//     document.write("<br>");
// }

// document.write("<br><br>");

// for (var i = 0; i <= user_input; i++) {
//     for (var j = 0; j < i; j++) {
//         document.write("*" + " ");
//     }
//     document.write(" <br>");
// }

// document.write("<br><br>");

// for (var i = 1; i <= user_input; i++) {
//     for (var j = i; j <= 5; j++) {
//         document.write("*" + " ");
//     }
//     document.write("<br>");
// }
