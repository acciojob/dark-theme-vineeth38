//your code here
function swapTheme() {
    // Get the div and button elements
    var div = document.getElementById("app");
    var button = document.getElementById("swap");

    // Check the current class of the div and button, and change it
    if (div.className === "day") {
        // Change the class to "night"
		div.className = "night";
    } else {
        // Change the class back to "day"
		div.className = "day";
    }
}