//                           VARIABLES FOR STIRNGS

// // Q1
// var userName;


// // // Q2
// var myName = "Muhammad Faraz Sami";
// document.write(myName);


// // // Q3
// var message;
// message = "Hello World";
// alert(message);


// // Q4
// var studentName = "Muhammad Faraz Sami";
// var studentAge = 25;
// var studentInstitude = "SMIT";
// var studentBatch = "Web Development";

// alert(studentName);
// alert(studentAge);
// alert(studentInstitude);
// alert(studentBatch);


// // Q5
// alert("PIZZA\nPIZZ\nPIZ\nPI\nP");


// // Q6
// var children = 3;
// var partnerName = "Farzana";
// var loca = "Pakistan";
// var job = "Web Developer";
// alert(`I am ${job} in ${loca} and married to ${partnerName} with ${children} kids`);


// // Q7
// var email = "farazsami812@gmail.com";
// alert("My email address is " + email);


// // Q8
// var book = "'A smarter way to learn JavaScript'";
// alert("I am trying to learn from the book " + book);


// // Q9
// document.write(`My name is ${studentName} <br> I am ${studentAge} years old <br> I study in ${studentInstitude} <br> I take ${studentBatch} classes`);


// // Q10
// document.write("Yay! I can write HTML content through JavaScript");




//                          VARIABLES FOR NUMBERS




// // Q1
// var age = 25;
// alert(`I am ${age} years old`);


// // Q2
// var visit = 21;
// alert(`You have visited this site ${visit} times`);


// // Q3
// var birthYear = 1999;
// document.write("My birth year is " + birthYear);


// // Q4
// var visitorName =prompt("Your Name");
// var product = prompt("What would you like to order?");
// var quantity = prompt("Item Quantity...");

// document.write(`${visitorName} ordered ${quantity} ${product} on XYZ Cloting store`);




//                     VARIABLE NAMES: LEGAL & ILLEGAL




// // Q1
var a, b, c;


// // Q2
// // LEGAL VARIABLES

// var $name;
// var name$;
// var _name;
// var name_;
// var name123;

// // ILLEGAL VARIABLES

// var 123name;
// var name-123;
// var first name;
// var @name;
// var true;


// // Q3

// document.write
//     (`
//     <p>a. A heading stating "Rules for naming JS variables"</p>
//     <p>b. Variable names can be contain ___________, ___________, ___________ and ___________. <br>&emsp; For example
//         <b>$my_!stVariable</b>
//     </p>
//     <p>c. Variables must begin with a ___________, ___________ or ___________. For example <b>$name, _name or name</b>
//     </p>
//     <p>d. Variable names are case ___________</p>
//     <p>e. Variable names should not be JS ___________</p>
//     `)




//                             MATH EXPRESSIONS




// // Q1
var num1 = 13;
var num2 = 9;
var sum = num1 + num2;
// alert("Sum of 13 and 9 is "+sum);


// // Q2
// var subtract = num1 - num2;
// alert("Result of subtracting 9 from 13 is "+ subtract);

// var multiply = num1 * num2;
// alert("Result of multiplying 13 and 9 is " + multiply);

// var divide = num1 / num2;
// alert("Result of dividing 13 by 9 is " + divide);

// var remainder = num1 % num2;
// alert("Remainder of dividing 13 by 9 is " + remainder);


// // Q3
// var anyNo;
// document.write("Value after variable decleration is " + anyNo);

// anyNo = 3;
// document.write("<br>Initial value: " + anyNo);

// anyNo++;
// document.write("<br>Value after increment is " + anyNo);

// anyNo += 7;
// document.write("<br>Value after addition is " + anyNo);

// anyNo --;
// document.write("<br>Value after decrement is " + anyNo);

// var remainder2 =  anyNo % 3;
// document.write("<br>The remainder is " + remainder2);


// // Q4
// var ticketPrice = 600;
// var ticketQuantity = 5;

// document.write(`Total cost to buy ${ticketQuantity} tickets to a movie is ${ticketPrice * ticketQuantity} PKR`);


// // Q5
// var tableNO = 4;

// document.write(`
//     ${tableNO} x  1 = ${4 * 1} <br>
//     ${tableNO} x  2 = ${4 * 2} <br>
//     ${tableNO} x  3 = ${4 * 3} <br>
//     ${tableNO} x  4 = ${4 * 4} <br>
//     ${tableNO} x  5 = ${4 * 5} <br>
//     ${tableNO} x  6 = ${4 * 6} <br>
//     ${tableNO} x  7 = ${4 * 7} <br>
//     ${tableNO} x  8 = ${4 * 8} <br>
//     ${tableNO} x  9 = ${4 * 9} <br>
//     ${tableNO} x  10 = ${4 * 10} <br>
//     `)


// // Q6
// var celsius = 12;
// var convert_to_fahrenheit = (celsius * 9 / 5) + 32;
// var fahrenheit = 68;
// var convert_to_celsius = (fahrenheit - 32) * 5 / 9;

// document.write(`${celsius}<sup>o</sup>C is ${convert_to_fahrenheit}<sup>o</sup>F <br>`);
// document.write(`${fahrenheit}<sup>o</sup>F is ${convert_to_celsius}<sup>o</sup>C`);


// // Q7
// var price_item1 = 560;
// var quantity_item1 = 2;
// document.write("Price of item 1 is " + price_item1, "<br>");
// document.write("Quantity of item 1 is " + quantity_item1, "<br>");

// var price_item2 = 200;
// var quantity_item2 = 5;
// document.write("Price of item 2 is " + price_item2, "<br>");
// document.write("Quantity of item 2 is " + quantity_item2, "<br><br>");

// var shipping = 150;
// document.write("Shipping charges " + shipping, "<br><br>");
// document.write(`Total cost of your order is ${price_item1 * quantity_item1 + price_item2 * quantity_item2 + shipping} PKR`);


// // Q8
// var total_marks = 1200;
// document.write("Total marks : " + total_marks, "<br>")

// var obtained_marks = 900;
// document.write("Obtained marks : " + obtained_marks, "<br>")

// var percentage = obtained_marks / total_marks * 100;
// document.write("Percentage : " + percentage + "%", "<br><br>")


// // Q9
// var dollar_rate = 104;
// var dollar_quantity = 10;

// var riyal_rate = 28;
// var riyal_quantity = 25;

// var total = (dollar_rate * dollar_quantity + riyal_rate * riyal_quantity);
// document.write("Total currency in PKR :" + total, "<br><br>");


// // Q10
// var someNumber = 5;
// var add = 5;
// var multiply2 = 10;
// var divide2 = 2;

// var expression = someNumber + add * multiply2 / divide2;
// alert(expression);


// // Q11
// var current_year = 2025;
// document.write("Current Year : " + current_year, "<br>");
// var birth_year = 2000;
// document.write("Birth Year : " + birth_year, "<br><br>");

// var age1 = current_year - birth_year;
// var age2 = age1 - 1;
// document.write("They are either " + age2 + " or " + age1 + " years old", "<br><br>");


// // Q12
// var radius = 12;
// var pi = 3.142;
// var circumference = 2 * pi * radius;

// document.write("Radius of a circle : " + radius, "<br>");
// document.write("The circumference is : " + circumference + "<br>");
// document.write("The area is : " + pi * radius * radius, "<br><br>");


// // Q13
// var a = 10;
// document.write("The value of a is: " + a, "<br><br>");

// ++a;
// document.write("The value of ++a is: " + a, "<br>");
// document.write("Now the value of a is: " + a, "<br><br>");

// document.write("The value of a++ is: " + a, "<br>");
// a++;
// document.write("Now the value of a is: " + a, "<br><br>");

// --a;
// document.write("The value of --a is: " + a, "<br>");
// document.write("Now the value of a is: " + a, "<br><br>");

// document.write("The value of a-- is: " + a, "<br>");
// a--;
// document.write("Now the value of a is: " + a, "<br><br>");


// // Q15
// var snack = "LAY'S WAVY";
// var age3 = 25;
// var max_life = 70;
// var amount_of_snack = 1;
// var remaing_life = max_life - age3;
// var days_of_a_year = 365;

// document.write("Favorite Snack : " + snack, "<br>");
// document.write("Current Age : " + age3, "<br>");
// document.write("Estimated Maximum Age : " + max_life, "<br>");
// document.write("Amount of snacks per day : " + amount_of_snack, "<br><br>");

// document.write("You will need " + remaing_life * days_of_a_year + " " + snack + " to last you until the ripe old age of " + max_life)
