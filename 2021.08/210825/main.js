// Selector

// var header = document.getElementsByTagName("header");
// var services = document.getElementById("services");
// var container = document.getElementsByClassName("container");


// console.log(header);
// console.log(services);
// console.log(container[2]);

// var services = document.getElementById('services')
// var serviceContainer = services.getElementsByClassName("container");

// console.log(serviceContainer[0]);

/*
var header = document.querySelector('header');
var services = document.querySelector("#services");
var container = document.querySelector(".container");


// console.log(header);
// console.log(services);
// console.log(container);


var serviceContainer = document.querySelector('#services .container')
console.log(serviceContainer);
*/


/*
var container = document.querySelectorAll(".container");
console.log(container);

// 가져온 내용 활용 예시
// 반복문과 결합

for(var i = 0; i < container.length; i++) {
	// console.log(container[i]);

	container[i].style.backgroundColor = "yellow";
}

*/




// innerHTML, outerHTML

// var header = document.querySelector('.masthead');
// console.log(header.innerHTML);
// console.log(header.outerHTML);

// console.log(typeof header.innerHTML);
// console.log(typeof header.outerHTML);

// header.innerHTML = "<h1>Hello World</h1>"

// header.outerHTML




// textContent
// var heading = document.querySelector('.masthead-heading');

// console.log(heading.textContent);
// heading.textContent = "Nice!!!!";

// heading.textContent = "<em>Hello</em> World";
// heading.innerHTML = "<em>Hello</em> World";




// innerText
/*
var heading = document.querySelector('.masthead-heading');

// console.log(heading.innerText);
// heading.innerText = "Nice~!!";
// heading.innerText = "<em>Nice</em>~!!";

console.log(heading.innerText);
console.log(heading.textContent);
*/



// createElement()
// var h3Test = document.createElement("h3")
// h3Test.textContent = "Hello World!!!!";
// console.log(h3Test);

// appendChild()
// var masthead = document.querySelector('.masthead');
// masthead.appendChild(h3Test);

// var mastheadContainer = document.querySelector('.masthead .container')
// mastheadContainer.appendChild(h3Test);

// var mastHeading = document.querySelector('.masthead-heading');
// mastHeading.appendChild(h3Test);



// appendChild() 주의점
/*
var subHeading = document.querySelector('.masthead-subheading');
var heading = document.querySelector('.masthead-heading');
var btn = document.querySelector('.masthead .btn');

subHeading.appendChild(h3Test);
heading.appendChild(h3Test);
btn.appendChild(h3Test);
*/



// insertAdjacentHTML();
/*
var heading = document.querySelector('.masthead-heading');
var txt = "<h3>!!!!!!!!!!!!!!!</h3>";

heading.insertAdjacentHTML('beforeend', txt);
*/


/*
// removeChild(), remove()
var headContainer = document.querySelector('.masthead .container');
var heading = document.querySelector(".masthead-heading");

// headContainer.removeChild(heading);
// heading.parentElement.removeChild(heading);

heading.remove();
*/



// var headContainer = document.querySelector('.masthead .container');

// css의 first-child와 last-child와 유사
// console.log(headContainer.firstElementChild);
// console.log(headContainer.lastElementChild);



/*
// 여기서부턴 js에서 css를 제어하는 프로퍼티
var heading = document.querySelector(".masthead-heading");
// heading.style.color = "red";
// heading.style.backgroundColor = "pink";
// heading.style.fontSize = "25px";



// heading.style.cssText = "color: red; background-color: pink; font-size: 25px;"


// heading.setAttribute("id", "test");
// heading.setAttribute("style", "color: red; background-color: pink; font-size: 25px;")

heading.setAttribute("id", "heading-test");
document.querySelector("#heading-test").style.backgroundColor = "pink";
*/


// js에서 클래스에 접근하는 방법
// className, classList
// var heading = document.querySelector(".masthead-heading");
// var headingClass = heading.className;
// var HeadingArr = headingClass.split(" ");

// console.log(headingClass);
// console.log(HeadingArr);
// console.log(HeadingArr[0]);
// console.log(HeadingArr[1]);

// heading.className = "test";


/*
var heading = document.querySelector(".masthead-heading");
// var headingClass = heading.classList;
// console.log(headingClass);
// console.log(headingClass[0]);
// console.log(headingClass[1]);

// heading.classList.add("test1", "test2", "test3");
// heading.classList.remove("text-uppercase")

// heading.classList.toggle("test");
// heading.classList.toggle("text-uppercase")


console.log(heading.classList.contains("text-uppercase"));
*/





// EventListener

// var heading = document.querySelector('.masthead-heading');

// heading.addEventListener('click', function() {
// 	console.log("Click");
// })


// var heading = document.querySelector('.masthead-heading');
/*
function test() {
	console.log("클릭");
}

heading.addEventListener('click', test);
heading.removeEventListener('click', test);
*/


// 참조타입 : 배열, 객체, 함수
/*
heading.addEventListener('click', function test() {
	console.log("클릭");
})

heading.removeEventListener('click', function test() {
	console.log("클릭");
})



var obj1 = {name: "kim"};
var obj2 = obj1

console.log(obj1 === obj2);
*/





// preventDefault
// js-prevent폴더로..
