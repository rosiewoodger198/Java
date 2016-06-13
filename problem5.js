// 5. Write a script that checks if a variable is less than 10.
//  If it is, alert the user that their variable is less than 10.
//  If it is not, using the console, let the user know that what 
//  the variable was and that it was greater than 10.

function myFunction() {
	var age, legal;
	age = document.getElementById("age").value;
		legal = (age < 10) ? "Your variable was less than 10": age + " is greater than 10";

	document.getElementById("logic").innerHTML = legal;
}