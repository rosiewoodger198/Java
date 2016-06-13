// Variables 

	var name = "Rosie";
	var myage = 22;
	var dob = "June 19th 1994"
	var car = "Audi";


// Debugging(alerts, comments, the console)

	a = 4;
	b = 9;
	c = a + b;
	console.log(c);

	function myFunction() {
		var i;
	    alert("You've been Alerted!");
	    i = "Status: Alerted";
	document.getElementById("alert").innerHTML = i;
	}


	function doSomething() {
		var x;
		if (confirm("Okay or Cancel!") == true) {
			x = "You pressed Okay!";
		} else {
			x = "You pressed Cancel!";
		}
	document.getElementById("option").innerHTML = x;

	}

// Different data types
	// String
	var name = "Rosie";

	// Number
	var myage = 22;

	// Boolean
	var x = true;
	var y = false;

	// Undefined (no value)
	var x;


// Arrays
	var cars= ["Bmw", "Audi", "Range Rover", "Lexus", "Ferrari"]
	var models=["3 series", "RS4", "Sport", "ftype", "458 italia"]
	console.log("The" + " " + cars[2] + " " + models[2] + " is my dream car")

	var car = {make: 'audi' , model: 'RS4'};
	console.log(car['make']);


// Testing
	console.log(name)
	alert ("Welcome to my JavaScript Cheat Page")

	// Test by plugging strings into the console equal to each other and it will return a true or false
		// >"cars" === "models"
		// < false

		// >"cars" === "cars"
		// < true


// Logic

function doSomethingElse() {
	var age, legal;
	age = document.getElementById("age").value;
		legal = (age < 21) ? "Sorry! You are too young":"Hooray! You are old enough";

	document.getElementById("logic").innerHTML = legal + " to drink!";
}



// Functions

	//2. Write 3 different functions that take input and return something via the console or an alert.
		//The functions on this page are as follows:
			// function myFunction()
			// function doSomething()
			// function doSomethingElse()





