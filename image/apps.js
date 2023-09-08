 // Get a reference to the form element
 var nameForm = document.getElementById("nameForm");

 // Add an event listener for form submission
 nameForm.addEventListener("submit", function(event) {
     event.preventDefault(); // Prevent the form from submitting

     // Get the values entered by the user
     var firstName = document.getElementById("hamza").value;
     var lastName = document.getElementById("hussain").value;

     // Display a greeting using the entered names
     console.log("Hello, " + firstName + " " + lastName + "!");
 });