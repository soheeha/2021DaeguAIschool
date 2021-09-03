/*
var bg = document.getElementById('color-bg')
var btn = document.getElementById('btn')

var color = ['#28AEFF', '#32B8FF', '#3CC2FF', '#46CCFF', '#50D6FF', '#5AE0FF', '#6EE0FF']

btn.addEventListener('click', function() {
	var random = Math.floor(Math.random() * 7);
	bg.style.backgroundColor = color[random];
})
*/


// for (var i = 2; i < 10; i++) {
// 	for (var j = 1; j < 10; j++) {
// 		console.log(i * j);
// 	}
// }


/*
var arr = ["바나나", "사과", "수박"];

for (var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
*/



var hex = document.querySelector('#hex');
var btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
	var color = "#";

	for(var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random() * arr.length);
		color += arr[random];
	}
	document.querySelector('#container').style.backgroundColor = color;
	hex.textContent = color;
})




























