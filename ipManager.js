// Define an array to store IP addresses or network ranges
var ips = [];

// Function to add an IP address or network range to the array
function addIP() {
	// Get the value of the input field
	var input = document.getElementById("ipInput").value;

	// Add the value to the array
	ips.push(input);

	// Display the values in the list
	displayIPs();
}

// Function to display the array of IP addresses or network ranges as a list on the page
function displayIPs() {
	// Get the UL element
	var list = document.getElementById("ipList");

	// Clear the current list
	list.innerHTML = "";

	// Loop through the array and add each value as an LI element to the list
	for (var i = 0; i < ips.length; i++) {
		var li = document.createElement("li");
		var text = document.createTextNode(ips[i]);
		li.appendChild(text);
		list.appendChild(li);
	}
}
