//Question # 01

/*var itemsArray = [
  { name: "juice", price: "50", quantity: "3" },
  { name: "cookie", price: "30", quantity: "9" },
  { name: "shirt", price: "880", quantity: "1" },
  { name: "pen", price: "100", quantity: "2" }
];

var totalPriceAllItems = 0;

for (var i = 0; i < itemsArray.length; i++) {
  var item = itemsArray[i];
  var itemTotal = parseInt(item.price) * parseInt(item.quantity);
  console.log(item.name + " total price: " + itemTotal);
  totalPriceAllItems += itemTotal;
}

console.log("Total price of all items: " + totalPriceAllItems);*/

//Question # 02

/*var user = {
  name: "Ali",
  email: "ali@example.com",
  password: "123456",
  age: 25,
  gender: "male",
  city: "Karachi",
  country: "Pakistan"
};

console.log("age" in user);          
console.log("country" in user);      
console.log("firstName" in user);    
console.log("lastName" in user);     

console.log(user.hasOwnProperty("age"));       
console.log(user.hasOwnProperty("country"));   
console.log(user.hasOwnProperty("firstName")); 
console.log(user.hasOwnProperty("lastName"));  */

//Question # 03

/*function Person(name, email, age, gender, city, country) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.gender = gender;
  this.city = city;
  this.country = country;
}

var person1 = new Person("Ali", "ali@example.com", 25, "male", "Karachi", "Pakistan");
var person2 = new Person("Sara", "sara@example.com", 30, "female", "Lahore", "Pakistan");
var person3 = new Person("John", "john@example.com", 28, "male", "New York", "USA");

console.log(person1);
console.log(person2);
console.log(person3);*/

//Question # 04

/*function Person(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

var people = JSON.parse(localStorage.getItem("people")) || [];

function saveRecord() {
  var name = document.getElementById("name").value;
  var genderElems = document.getElementsByName("gender");
  var gender = "";
  for (var i = 0; i < genderElems.length; i++) {
    if (genderElems[i].checked) {
      gender = genderElems[i].value;
      break;
    }
  }

  var address = document.getElementById("address").value;
  var education = document.getElementById("education").value;
  var profession = document.getElementById("profession").value;

  var person = new Person(name, gender, address, education, profession);
  people.push(person);
  localStorage.setItem("people", JSON.stringify(people));
  showRecords();
}

function showRecords() {
  var output = "";
  for (var i = 0; i < people.length; i++) {
    output += "<p>" +
      "<strong>Name:</strong> " + people[i].name + "<br>" +
      "<strong>Gender:</strong> " + people[i].gender + "<br>" +
      "<strong>Address:</strong> " + people[i].address + "<br>" +
      "<strong>Education:</strong> " + people[i].education + "<br>" +
      "<strong>Profession:</strong> " + people[i].profession +
      "</p><hr>";
  }
  document.getElementById("records").innerHTML = output;
}

showRecords();*/


//Question # 05

/*var mainContent = document.getElementById("main-content");
console.log("mainContent:", mainContent);

var children = mainContent.children;
console.log("Children of main-content:");
for (var i = 0; i < children.length; i++) {
  console.log(children[i]);
}

var renderElements = document.getElementsByClassName("render");
document.write("<h3>Render Elements:</h3>");
for (var i = 0; i < renderElements.length; i++) {
  document.write(renderElements[i].innerHTML + "<br>");
}

document.getElementById("first-name").value = "Alex";

document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";*/

//Question # 06

/*var result = document.getElementById("result");

  var formContent = document.getElementById("form-content");
  result.innerHTML += "<strong>i.</strong> Node type of 'form-content': " + formContent.nodeType + "<br>";

  var lastName = document.getElementById("lastName");
  var lastNameChild = lastName.firstChild;
  result.innerHTML += "<strong>ii.</strong> Node type of 'lastName': " + lastName.nodeType + "<br>";
  result.innerHTML += "Child node type of 'lastName': " + lastNameChild.nodeType + "<br>";

  lastName.textContent = "Last Name: Updated Bank";
  result.innerHTML += "<strong>iii.</strong> Updated 'lastName' text: " + lastName.textContent + "<br>";

  var mainContent = document.getElementById("main-content");
  result.innerHTML += "<strong>iv.</strong> First child of 'main-content': " + mainContent.firstElementChild.innerHTML + "<br>";
  result.innerHTML += "Last child of 'main-content': " + mainContent.lastElementChild.innerHTML + "<br>";

  var nextSibling = lastName.nextElementSibling;
  var prevSibling = lastName.previousElementSibling;
  result.innerHTML += "<strong>v.</strong> Next sibling of 'lastName': " + nextSibling.innerHTML + "<br>";
  result.innerHTML += "Previous sibling of 'lastName': " + prevSibling.innerHTML + "<br>";

  var emailInput = document.getElementById("email");
  var parentNode = emailInput.parentNode;
  result.innerHTML += "<strong>vi.</strong> Parent node of 'email': " + parentNode.nodeName + "<br>";
  result.innerHTML += "Node type of 'email': " + emailInput.nodeType + "<br>";*/
