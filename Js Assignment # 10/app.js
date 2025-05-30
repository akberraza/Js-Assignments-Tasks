// var getDevare = document.querySelector("#del")

// function  del(btn){
//      btn.parentNode.remove()
// }

// var getCounter = document.querySelector("#count");

// var index = 0;

// function increase(){
//      index++
//      getCounter.innerHTML = "count : " + index
// }

// function decrese(){
//      index--;
//      getCounter.innerHTML = "count : " + index
// }

// document.getElementById("signupForm").addEventListener("submit", function(event) {
//      event.preventDefault(); // Stop form from reloading page

//      // Get values
//      var name = document.getElementById("name").value;
//      var email = document.getElementById("email").value;
//      var password = document.getElementById("password").value;

//      // Display data
//      document.getElementById("outputData").innerHTML = `
//        <h3>Form Submitted</h3>
//        <p><strong>Name:</strong> ${name}</p>
//        <p><strong>Email:</strong> ${email}</p>
//        <p><strong>Password:</strong> ${password}</p>
//      `;
//    });



   /*function toggleContent() {
     var content = document.getElementById("itemContent");
     var button = document.querySelector(".read-more-btn");

     content.classList.toggle("show");

     if (content.classList.contains("show")) {
       button.textContent = "Read less";
     } else {
       button.textContent = "Read more";
     }
   }*/


     /*var studentForm = document.getElementById('studentForm');
     var editForm = document.getElementById('editForm');
     var studentTable = document.querySelector('#studentTable tbody');
 
     var currentEditRow = null;
 
     studentForm.addEventListener('submit', function (e) {
       e.preventDefault();
 
       var name = document.getElementById('name').value;
       var age = document.getElementById('age').value;
       var grade = document.getElementById('grade').value;
 
       var row = studentTable.insertRow();
 
       row.innerHTML = `
         <td>${name}</td>
         <td>${age}</td>
         <td>${grade}</td>
         <td>
           <button onclick="editStudent(this)">Edit</button>
           <button onclick="devareStudent(this)">Devare</button>
         </td>
       `;
 
       studentForm.reset();
     });
 
     function devareStudent(btn) {
       var row = btn.parentElement.parentElement;
       studentTable.devareRow(row.rowIndex - 1);
     }
 
     function editStudent(btn) {
       currentEditRow = btn.parentElement.parentElement;
 
       document.getElementById('editName').value = currentEditRow.cells[0].innerText;
       document.getElementById('editAge').value = currentEditRow.cells[1].innerText;
       document.getElementById('editGrade').value = currentEditRow.cells[2].innerText;
 
       editForm.style.display = 'block';
     }
 
     editForm.addEventListener('submit', function (e) {
       e.preventDefault();
 
       currentEditRow.cells[0].innerText = document.getElementById('editName').value;
       currentEditRow.cells[1].innerText = document.getElementById('editAge').value;
       currentEditRow.cells[2].innerText = document.getElementById('editGrade').value;
 
       editForm.style.display = 'none';
     });
 
     function cancelEdit() {
       editForm.style.display = 'none';
     }*/
 