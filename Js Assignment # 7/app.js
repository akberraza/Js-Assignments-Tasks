// Question # 01

// var num = 45;

// document.write(`number : ${num} <br> round off value : ${Math.round(num)} <br> floor value : ${Math.floor(num)} <br> ceil value : ${Math.ceil(num)}`)

// Question # 02

// var num = -32;

// document.write(`number : ${num} <br> round off value : ${Math.round(num)} <br> floor value : ${Math.floor(num)} <br> ceil value : ${Math.ceil(num)}`)

// Question # 03

// var num = 3.45214;

// document.write(`number : ${num} <br> round off value : ${Math.round(num)} <br> floor value : ${Math.floor(num)} <br> ceil value : ${Math.ceil(num)}`)

// Question # 04

// var num = -2.673;

// document.write(`number : ${num} <br> round off value : ${Math.round(num)} <br> floor value : ${Math.floor(num)} <br> ceil value : ${Math.ceil(num)}`)

// Question # 05

// var num = -4;

// document.write(`The absolute value of ${num} is ${Math.abs(num)}`)

// Question # 06

// document.write(`Random dice value of : ${Math.floor(Math.random(1)*11)} <br> Random dice value of : ${Math.floor(Math.random(1)*11)}`)

// Question # 07

// var heads = prompt("Player 1");
// var tails = prompt("Player 2");
// var toss = Math.random()*2;

// if(toss == 0){
//     alert(`${heads} is Toss win`)
// }
// else{
//     alert(`${tails} is Toss win`)
// }

// Question # 08

// document.write(`random number between 1 to 100 : ${Math.floor(Math.random(1)*101)}`);

// Question # 09

// var weight = parseFloat(prompt("Enter any weight"));

// document.write(`The weight of user is ${weight} kgs`)

// Question # 10

// var secret = 3;

// var user = +prompt("Enter any Number from 1to10");

// if(secret == user){
//     alert("Congratulate")
// }else{
//     alert("Try Again")
// }

// Question # 11

// var date = new Date();
// document.write(date);

// Question # 12

// var month = new Date();
// var monthsName = ["January","February ","March","April","May","June","July","August","September","October","November","December"];
// document.write(`Current month :${monthsName[month.getMonth()]}`)

// Question # 13

// var day = new Date();
// var daysName = ["sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
// alert(`Today is : ${daysName[day.getDay()].slice(0,3)}`)

// Question # 14

// var day = new Date();
// var daysName = ["sunday","Saturday"];
// var valid = false;

// if(daysName.includes(day)){
//     alert(`It's Fun day`);
//      valid = true;
     
// }
// else{
//     alert(day)
// }

// Question # 15

// var day = new Date().getMonth();

// if(day < 15){
//     alert("First fifteen days of the month")
// }
// else{
// alert("Last day of the month")
// }

// Question # 16

// var current = new Date()
// var milisecond = current.getTime();
// var minute = (1000 * 60 )/ milisecond;

// document.write(`Current Date : ${current} <br> Elapsed miliseconds since January 1, 1970 : ${milisecond} <br> Elapsed minutes since January 1, 1970 : ${minute}`);

// Question # 17

// var currentHours = new Date().getHours();
// if(currentHours < 12){
//     alert("It;s AM")
// }
// else{
//     alert("It's PM")
// }

// Question # 18

// var laterDate = new Date(2025,11,31);
// document.write(`Later Date : ${laterDate}`);

// Question # 19

// var ramdan2015 = new Date(2015,5,18);
// var currentRamdan = new Date(2024,2,11);
// var final = currentRamdan - ramdan2015;
// var final2 =  final / (1000 * 60 * 60 * 24);
// document.write(`${Math.floor(final2)} days have passed since 1st Ramdan,2015`);

// Question # 20

// var December = new Date(2015,11,5,22,50,16);
// var January = new Date(2015,0,1,0,0,0);
// var seconds = December - January;
// var final = seconds / 1000;
// document.write(`On refrence date set ${December} , <br> ${final} seconds had passed since beginning of 2015`)

// Question # 21

// let date = new Date();
// document.write("Pehle:", date + "<br>");

// date.setHours(date.getHours() + 1);
// document.write("Baad me:", date);

// Question # 22

// var currentDate = new Date();

// var pastDate = new Date(currentDate);
// pastDate.setFullYear(pastDate.getFullYear() - 100);

// var currentDateString = currentDate.toString();
// var pastDateString = pastDate.toString();

// alert(`Current date: ${currentDateString}\n100 years back, it was: ${pastDateString}`);

// Question # 23

// var current = new Date();
// var dob = new Date(prompt("Enter Your date of birth"));
// var diff = current.getTime() - dob.getTime();
// var final = diff / (1000 * 60 *60 * 24 * 365)
// document.write( `Your age is${Math.floor(final)} <br> Your Birth year is ${dob.getFullYear()}`)

// Question # 24

// let customerName = "Akbar Raza";
// let currentMonth = "Febarury";
// let numberOfUnits = 450;
// let chargesPerUnit = 14;
// let latePaymentSurcharge = 500;

// let netAmountPayable = numberOfUnits * chargesPerUnit; 
// let grossAmountPayable = netAmountPayable + latePaymentSurcharge; 

// netAmountPayable = netAmountPayable.toFixed(2);
// grossAmountPayable = grossAmountPayable.toFixed(2);

// document.write(`
//     <h1>K-Electric Bill</h1>
//     <p><strong>Customer Name:</strong> ${customerName}</p>
//     <p><strong>Month:</strong> ${currentMonth}</p>
//     <p><strong>Number of units:</strong> ${numberOfUnits}</p>
//     <p><strong>Charges per unit:</strong> ${chargesPerUnit}</p>
    // <p><strong>Net Amount Payable (within Due Date):</strong> ${netAmountPayable}</p>
    // <p><strong>Late Payment Surcharge:</strong> ${latePaymentSurcharge}</p>
    // <p><strong>Gross Amount Payable (after Due Date):</strong> ${grossAmountPayable}</p>
// `);
