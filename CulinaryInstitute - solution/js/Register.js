function getFromSession() {
	var url = "http://localhost:5500/types.json";
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.onload = function () {

		obj = JSON.parse(xhr.responseText);

		//Declared as global variables - so that it can be used any where within this file
		type = sessionStorage.getItem('interest');
		cityArr = obj[type].city
		

		if(type=="healthy"){
			document.getElementById('type').innerText = "Register for Nutrition cooking class"
			var values = obj[type].varieties;
		} else if(type=="desserts") {
			document.getElementById('type').innerText = "Register for Desserts cooking class"
			var values = obj[type].varieties;
		} else if(type=="regulars"){
			document.getElementById('type').innerText = "Register for Regular cooking class"
			var values = obj[type].varieties;
		} 

		for(var i=0;i<values.length;i++){
			document.getElementById('list').innerHTML += "<li>"+values[i]+"</li>"
		}
	};
	xhr.send();
}

function checkName() {
	var name = document.getElementById('name').value;
	console.log(name)
	if(!(/^[a-zA-Z]{5,12}/.test(name))){
		document.getElementById('nameError').innerText = "Contains only alphabet and should be 5-12 characters long"
	} else {
		document.getElementById('nameError').innerText = ""
	}
}

function changeToUpper() {
	var data = document.getElementById("city").value;
	document.getElementById("city").value = data.toUpperCase();
	
}

function checkCity() {

	var data = document.getElementById('city').value
	for(let i=0;i<cityArr.length;i++){

		if(data.toUpperCase()==cityArr[i].toUpperCase()) {
			document.getElementById("cityError").innerText = ""
			document.getElementById('btn').disabled = false;
			break;
		} else {
			document.getElementById("cityError").innerText = "Sorry! We dont operate in this city"
			document.getElementById('btn').disabled = true;
		}
	}
	
}

function checkAge() {
	var age = document.getElementById("age").value
	if(age <18 || age>60 ) {
		document.getElementById("ageError").innerText = "Sorry, You should be between 18-60 years old!"
		document.getElementById('btn').disabled = true
	} else {
		document.getElementById("ageError").innerText = ""
	}
}


function register(e) {
	fareObj = {
		"healthy":4500,
		"desserts":5000,
		"regulars":3500,
	 }
	var fee = fareObj[type]
	document.getElementById("successMessage").innerText = "Registered! You will be paying "+fee+" at the time of admission"
	sessionStorage.clear();
	e.preventDefault();
}

