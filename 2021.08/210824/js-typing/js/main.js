var txtElement = document.getElementById('txt');
var words = ["엔드게임", "인피니티 워", "에이지 오브 울트론"];

function TypeWriter(txtElement, words) {
	this.txtElement = txtElement;
	this.words = words;

	this.txt = "";  //처음엔 빈문자열로 시작하다가 엔 -> 엔드 -> 엔드게 -> 엔드게임 -> 엔드게..
	this.wordIndex = 0;
	this.isDeleting = false;
	this.type();
}

TypeWriter.prototype.type = function() {

	// 0
	var current = this.wordIndex % this.words.length;
	var fulltxt = this.words[current]

	if(this.isDeleting) {

		// 엔드게임 -> 엔드게
		// 엔드게 -> 엔드
		// 엔드 -> 엔
		// 엔 -> ""
		this.txt = fulltxt.substring(0, this.txt.length - 1);



	} else {

		// 엔드게임
		// "" -> 엔
		// 엔 -> 엔드
		// 엔드 -> 엔드게
		// 엔드게 -> 엔드게임
		this.txt = fulltxt.substring(0, this.txt.length + 1);
	}

	this.txtElement.textContent = this.txt;

	
	// 글자가 완성되었을 때, 글자가 모두 삭제되었을 때
	// 조건이 충족하지 않을 땐 이 부분을 건너뛴다.
	if(!this.isDeleting && this.txt === fulltxt) {
		this.isDeleting = true;
	} else if(this.isDeleting && this.txt === "") {
		this.isDeleting = false;
		this.wordIndex++;
	}

	var that = this;

	setTimeout(function() {
		// console.log(this);
		// this.type();
		that.type();
	}, 1000);


}

new TypeWriter(txtElement, words);















































/*
var arr = [10, 20, 30];
var index = 0;   //기준점


// 무한루프 기능? 10 -> 20 -> 30 -> 10 -> 20 -> 30 -> 10 .....
// 나머지에 대한 개념을 숙지해야 ㅇ 

// 0 % 3 = 0;
// 1 % 3 = 1;
// 2 % 3 = 2;
// 3 % 3 = 0;
// 4 % 3 = 1;
// 5 % 3 = 2;
// 6 % 3 = 0;
// 7 % 3 = 1;
// 8 % 3 = 2;


function loop() {

	var current = index % arr.length;    // 결과 0
	console.log(arr[current]);
	index++;

	setTimeout(function() {
		loop();
	}, 2000);    // 2초마다 첫번째 인수인 함수를 실행

}

loop();   // 최초 loop는 실행시켜줘야 동작이 된다.
*/

