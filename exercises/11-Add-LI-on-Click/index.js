let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var elem1 = document.createElement("LI");
	document.querySelector("#myList").appendChild(elem1);
});
