window.onload = function() {
	console.log("The website was loaded...cambio");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	for (var i = 0; i < countries.length; i++) {
		let valores = document.createElement("option");
		valores.innerHTML = countries;
		document.getElementById("mySelect").appendChild(valores);
	}
	/*
    countries.forEach(function(countries) {
		console.log(countries);
	});
    */
	//mySelect

	/*
    var elem1 = document.createElement("P");
	elem1.innerHTML = "Hello World";
	document.body.appendChild(elem1);
    */
};
