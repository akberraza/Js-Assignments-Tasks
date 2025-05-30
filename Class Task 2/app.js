// var getInp = document.querySelector("#inp");
// var getUl = document.querySelector("#ul");

// function add(){

//    getUl.innerHTML += `<li>${getInp.value}</li>`
//    getInp.value = "";
// }


/*var allUsers = [];

function btn(){
    var getname = document.querySelector("#name");
    var getemail = document.querySelector("#email");
    var getPassword = document.querySelector("#password");

   var obj = {
    name: getname.value,
    email: getemail.value,
    password: getPassword, 
   }
   allUsers.push(obj);
   localStorage.setItem("user",JSON.stringify(allUsers));
}

var getUl = document.querySelector("#ul");
var getData = JSON.parse(localStorage.getItem(user));

for(var i =0; i < getData.length; i++){
   getUl.innerHTML += `<li>${getData[i].name}</li>`
}*/



/*var allUsers = JSON.parse(localStorage.getItem("user")) || [];
var getUl = document.querySelector("#ul");

// Show users on load
function renderUsers() {
  getUl.innerHTML = ""; 
  for (var i = 0; i < allUsers.length; i++) {
    getUl.innerHTML += `<li>${allUsers[i].name} "  ${allUsers[i].email} " ${allUsers[i].password}</li>`;
  }
}    
renderUsers();

function btn() {
  var getName = document.querySelector("#name");
  var getEmail = document.querySelector("#email");
  var getPassword = document.querySelector("#password");

  var obj = {
    name: getName.value,
    email: getEmail.value,
    password: getPassword.value
  };

  allUsers.push(obj);
  localStorage.setItem("user", JSON.stringify(allUsers));

  // Form clear
  getName.value = "";
  getEmail.value = "";
  getPassword.value = "";

  // Update UI
  renderUsers();
}*/


/*var allUsers = JSON.parse(localStorage.getItem("user")) || [];
var getUl = document.querySelector("#ul")

function randerUser(){
   getUl.innerHTML = "";
   for(var i = 0; i < allUsers.length; i++){
      getUl.innerHTML += `<li>${allUsers[i].name} " ${allUsers[i].email} " ${allUsers[i].password}</li>`
   }
}
randerUser();

function btn(){
   var getName = document.querySelector("#name");
   var getEmail = document.querySelector("#email");
   var getPassword = document.querySelector("#password");

   var obj = {
      name: getName.value,
      email: getEmail.value,
      password: getPassword.value
   }

   allUsers.push(obj);
   localStorage.setItem("user",JSON.stringify(allUsers));

   getName.value = "";
   getEmail.value = "";
   getPassword.value = "";

   randerUser();
}*/

/*var allUsers = JSON.parse(localStorage.getItem("user"))|| [];
var getUl = document.querySelector("#ul");

function randerUser() {
   getUl.innerHTML = "";
   for(var i = 0; i < allUsers.length; i++){
     getUl.innerHTML += `<li>${allUsers[i].name} " ${allUsers[i].email} " ${allUsers[i].password}</li>`
   }
}
randerUser();

function btn(){
   var getName = document.querySelector("#name");
   var getEmail = document.querySelector("#email");
   var getPassword = document.querySelector("#password");

   var obj = {
      name: getName.value,
      email: getEmail.value,
      password: getPassword.value
   }

   allUsers.push(obj);
    localStorage.setItem("user",JSON.stringify(allUsers));
   
    getName.value = "";
    getEmail.value = "";
    getPassword.value = "";

    randerUser();
}*/


var 