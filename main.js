// Define a Function
function sayOuch() {
	alert('Oops! You got me!');
}

// Use a CSS selector to identify an element
var logo = document.querySelector('img');

// Assign the function to the onclick event on that element
logo.onclick = sayOuch;
