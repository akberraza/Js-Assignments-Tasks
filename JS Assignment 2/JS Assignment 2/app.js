// // Q5
// var color = prompt("Please enter traffic signal color");

// if (color == "red") {
//     alert(`Signal color ${color}\nVehicles must stop`);
// }
// else if (color == "green") {
//     alert(`Signal color ${color}\nVehicles can move now`);
// }
// else if (color == "yellow") {
//     alert(`Signal color ${color}\nVehicles should get ready to move`);
// }
// else {
//     alert("Invalid Value");
// }


// // Q6
// var max_age = Number(prompt("Max Age"));
// var current_age = Number(prompt("Current Age"));

// if (current_age <= max_age) {
//     alert("You are welcome");
// } else {
//     alert("Get Out");
// }


// // Q7
// var fuel = +prompt("Remaining Fuel");

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("Enjoy your journey");
// }


// // Q9
// var eng = Number(prompt("How many marks did you obtain in the English"));
// var urdu = Number(prompt("How many marks did you obtain in the Urdu"));
// var math = Number(prompt("How many marks did you obtain in the Math"));

// var obtained_marks = eng + urdu + math;
// var total_marks = 300;
// var percentage = obtained_marks / total_marks * 100;
// var grade;
// var remark;

// if (percentage > 80) {
//     grade = "A+", remark = "Excellent";
// }
// else if (percentage >= 70) {
//     grade = "A", remark = "Good";
// }
// else if (percentage >= 60) {
//     grade = "B", remark = "Not Bad";
// }
// else if (percentage >= 50) {
//     grade = "C", remark = "You need to improve";
// }
// else if (percentage >= 40) {
//     grade = "D", remark = "Poor";
// }
// else {
//     grade = "Fail", remark = "Sorry";
// }

// document.write(
//     ` <table border="">

//         <tr>
//             <th>Subject</th>
//             <th>Obtained Marks</th>
//             <th>Subject Marks</th>
//             <th>Total Obtained Marks</th>
//             <th>Total Marks</th>
//             <th>Grade</th>
//             <th>Percentage</th>
//             <th>Remarks</th>
//         </tr>

//         <tr>
//             <td>English</td>
//             <td>${eng}</td>
//             <td>100</td>
//             <td rowspan="3">${obtained_marks}</td>
//             <td rowspan="3">${total_marks}</td>
//             <td rowspan="3">${grade}</td>
//             <td rowspan="3">${percentage.toFixed(2)}</td>
//              <td rowspan="3">${remark}</td>
//         </tr>

//         <tr>
//             <td>Urdu</td>
//             <td>${urdu}</td>
//             <td>100</td>
//         </tr>

//         <tr>
//             <td>Math</td>
//             <td>${math}</td>
//             <td>100</td>
//         </tr>

//     </table>`
// )


// // Q10
// var item1 = prompt("What do you like to order item1");
// var item1Price = Number(prompt("Item #1 Price"));
// var item1Quantity = Number(prompt("Item #1 Quantity"));

// var item2 = prompt("What do you like to order item2");
// var item2Price = Number(prompt("Item #2 Price"));
// var item2Quantity = Number(prompt("Item #2 Quantity"));

// var shipping = Number(prompt("Shipping Charges"));
// var total = item1Price * item1Quantity + item2Price * item2Quantity + shipping;
// var discount = total * 10 / 100;

// document.write(
//     `Price of ${item1} is ${item1Price} <br> Quantity of ${item1} is ${item1Quantity}<br> Price of ${item2} is ${item2Price} <br> Quantity of ${item2} is ${item2Quantity} <br><br> Shipping Charges ${shipping} <br> <br>
//     Total cost of your order is ${total}<br>`
// );

// if (total <= 2000) {
//     document.write(`You are not Eligible for Discount`);
// } else {
//     document.write(`Discounted Price is ${total - discount}`);
// }


// // Q11
// var randomNo = Math.floor(Math.random() * 10) + 1;
// var user_guess = Number(prompt("Guess the secret number between 1 to 10 "));
// console.log(randomNo);

// if (randomNo == user_guess) {
//     document.write(`Computer guess ${randomNo} <br> You guess ${user_guess} <br> Bingo Correct Answer`);
// }
// else if (user_guess + 1 == randomNo) {
//     document.write(`Computer guess ${randomNo} <br> You guess ${user_guess} <br>Close enough to the correct answer`);
// }
// else if (user_guess - 1 == randomNo) {
//     document.write(`Computer guess ${randomNo} <br> You guess ${user_guess} <br>Close enough to the correct answer`);
// }
// else {
//     document.write("Please try again");
// }


// // Q14 
// var alphabetic_value = prompt("Enter any Alphabetic Value ");
// var numeric_value = Number(prompt("Enter any Numeric Value "));
// var bool = prompt("Enter True or False");

// if (typeof (alphabetic_value) === "string") {
//     alert(`${alphabetic_value} is a string`);
// } else if (numeric_value === "number") {
//     alert(`${numeric_value} is a number`);
// } else if (bool === "boolean") {
//     alert(`${bool} is a number`);
// } else {
//     alert("Invalid Value")
// }

// if (typeof (alphabetic_value) === "string") {
//     alert(`${alphabetic_value} is a string`);

//     if (typeof (numeric_value) === "number") {
//         alert(`${numeric_value} is a number`);

//         if (typeof (bool) === "boolean") {
//             alert(`${bool} is a Boolean`);
//         }
//         else {
//             alert("Invalid Value");
//         }
//     } else {
//         alert("Invalid Value");
//     }
// }
// else {
//     alert("Invalid Value");
// }


// // // Q15
// var user_input = Number(prompt("Please enter any number"));

// if (user_input % 2 == 0) {
//     document.write(`Its a Even number ${user_input}`);
// } else {
//     document.write(`Its a Odd number ${user_input}`);
// }


// // Q16
// var temperature = Number(prompt("Please enter the Temperature of outside"));
// if (temperature >= 40) {
//     document.write("It is too hot outside.")
// }
// else if (temperature >= 30) {
//     document.write("The Weather today is Normal.")
// }
// else if (temperature >= 20) {
//     document.write("Today's Weather is cool.")
// }
// else if (temperature >= 10) {
//     document.write("OMG! Today's weather is so Cool.")
// }


// // Q17
// var firstNO = Number(prompt("Please enter First Number"));
// var secondNO = Number(prompt("Please enter Second Number"));
// var operator = prompt("Which operation do you want to perform", "+");

// if (operator == "+") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO + secondNO} `);
// }
// else if (operator == "-") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO - secondNO} `);
// }
// else if (operator == "*") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO * secondNO} `);
// }
// else if (operator == "/") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO / secondNO} `);
// }
// else if (operator == "%") {
//     document.write(`You choose ${operator} so here is the answer of ${firstNO} ${operator} ${secondNO} = ${firstNO % secondNO} `);
// }


// // Q18
// var day = prompt("Please enter the day name");

// if (day == "monday" || day == "tuesday" || day == "wednesday" || day == "thursday" || day == "friday") {
//     document.write("Its a week day");
// }
// else if (day == "saturday") {
//     document.write("Its Weekend");
// }
// else if (day == "sunday") {
//     document.write("Yay! It's a holiday.");
// }
// else {
//     document.write("Invalid Value");
// }


// // Q19
// var score = +prompt("What is your score");
// if (score > 50) {
//     document.write("You are passes");
// }
// else {
//     document.write("Try Again!");
// }


// // Q20
// var num1 = +prompt("Please enter Value 1");
// var num2 = +prompt("Please enter Value 2");

// if (num1 > num2) {
//     document.write(`The greater number of ${num1} and ${num2} is ${num1}`);
// }
// else if (num2 > num1) {
//     document.write(`The greater number of ${num1} and ${num2} is ${num2}`);
// }
// else {
//     document.write(`Both numbers are equal ${num1} and ${num2}`);
// }


// // Q21









