// IF 조건문
// var a = 20;
// var b = 20;
// var c = 60;

/*
if(a < b) {
	console.log("a는 b보다 작다");
}
*/


/*
if(a > b) {
	console.log("a는 b보다 크다");
} else {
	console.log("a는 b보다 작다");
}
*/


/*
if(a > b)  {
	console.log("a는 b보다 크다");
} else if(b > c) {
	console.log("b는 c보다 크다");
} else if(a < c) {
	console.log("a는 c보다 작다");
} else if(b < c) {
	console.log("b는 c보다 작다");
} else {
	console.log("모든 조건을 만족하지 않는다");
}
*/


//중첩 if문
/*
if(a !== b) {

	if(a > b) {
		console.log("a는 b보다 크다");
	} else {
		console.log("a는 b보다 작다");
	}

} else {
	console.log("a와 b는 같다");
}
*/





// 실무팁
// 거짓이 되는 상황
// false, "", 0, null, undefined
/*
if(false) {
	console.log("참!!!");
} else {
	console.log("거짓!!!");
}
*/








// 삼항 연산자
/*
var age = 15;

if(age >= 18) {
	console.log("성인");
} else {
	console.log("어린이");
}



var result = (age >= 18) ? "성인" : "어린이";
console.log(result);
*/





// 조건문 응용

// var userId = prompt("아이디를 입력해 주세요.");
// var userPw = prompt("비밀번호를 입력해 주세요.");

// console.log(userId);
// console.log(userPw);

/*
if(userId === "younghee" && parseInt(userPw) === 12345) {
	alert("로그인되었습니다.");
} else {
	alert("아이디 또는 비밀번호가 틀렸습니다.");
}
*/





// 전역변수, 지역변수
/*
var globalV = "전역변수";

function func() {
	var localV = "지역변수";

	console.log(globalV);
	console.log(localV);
}

//func();

console.log(globalV);
console.log(localV);
*/



// let, consts





// 전역/지역 변수 만들 때 주의점

// var a = 10;
// a = 100;

/*
var gv = "전역변수";

function func() {
	var gv = "지역변수";
	console.log(gv);
}

func();

console.log(gv);
*/




/*
var gv = "전역변수";

if(true) {
	 var lv = "지역변수????";

	 console.log(gv);
	 console.log(lv);
}
*/




// var gv = "전역변수";
// var aaa = "aaa";






// 전역 스코프
/*
var gv = "전역변수";

function func() {
	console.log(gv);
}

func();

console.log(gv);
*/


// 지역 스코프

/*
function func() {
	var lv = "지역변수";
	console.log(lv);
}

func();

console.log(lv);
*/


// 함수는 서로의 스코프에 접근할 수 없다!!!!!!!!
/*
function a() {
	var apple = "사과";
}

function b() {
	a();
	console.log(apple);
}

b();
*/



/*
var a = 10;

function func1() {

	var b = 20;

	function func2() {
		var c = 30;

		console.log(a + b + c);
	}

	func2();
}

func1();

*/




// 렉시컬 스코핑
var name = "younghee";

function func1() {
	console.log(name);
}

function func2() {
	name = "Jun"
	func1();   // 호출한다고 해서 console.log(name);를 한 게 아니다.
}

func2();
































