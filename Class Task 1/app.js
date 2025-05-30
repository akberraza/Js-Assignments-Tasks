var signupForm = document.querySelector("#signupForm");
var userData = document.querySelector("#userData");

signupForm.addEventListener("submit",function(event){
  event.preventDefault();

  

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  var user = "name :" + name + "email :" + email + "password :" + password;

  localStorage.setItem("user",user);


  displayUserData();
})

function displayUserData(){
  var user = localStorage.getItem("user");

  if(user){
    userData.innerHTML += `<p>${user}</p>`
  }
  else{
    userData.innerHTML = `<p>No user data found.</p>`
  }
}

window.addEventListener("load",displayUserData);