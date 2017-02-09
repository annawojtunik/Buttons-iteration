// plik scripts.js

var elements = document.getElementsByClassName('button');
console.log(elements);
for (var element = 0 ; element < elements.length ; element++) {
	alert(elements[element].innerText);
}