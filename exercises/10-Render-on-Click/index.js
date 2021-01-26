let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var elem1 = document.createElement("P");
	elem1.innerHTML = "Hello World";
	elem1.style.background = "yellow";
	document.body.appendChild(elem1);
});
