var fixedNav = document.querySelector('nav');

// window.addEventListener('Scroll')
// window.onscroll = function () {}
// document.addEventListener('Scroll')

/*
window.addEventListener('scroll', function () {
	var top = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	
	
	if(top > 50) {
		fixedNav.classList.add('active')
	} else {
		fixedNav.classList.remove('active')
	}
	
	// 위의 if문을 삼항연산자로 할 경우
	(top > 50) 
		? fixedNav.classList.add('active') 
		: fixedNav.classList.remove('active')
})
*/


/*
var oldVal = 0;

window.addEventListener('scroll', function() {
	var newVal = window.scrollY 
				|| window.pageYOffset 
				|| document.documentElement.scrollTop 
				|| document.body.scrollTop;
	
	console.log("oldVal", oldVal);
	console.log("newVal", newVal);

	if(oldVal - newVal < 0) {
		fixedNav.classList.add('active'); 
	}

	if(oldVal - newVal > 0) {
		fixedNav.classList.remove('active'); 
	}

	oldVal = newVal;

})
*/



/*
window.addEventListener('wheel', mouseWheelEvt);
window.addEventListener('DOMMouseScroll', mouseWheelEvt );


function mouseWheelEvt(e) {
	var index = e.wheelDelta ? e.wheelDelta : -e.detail;

	(index < 0)
		? fixedNav.classList.add('active') 
		: fixedNav.classList.remove('active')
}
*/


var isFirebox = (navigator.userAgent.indexOf('Firefox') !== -1);
var wheelEvt = isFirebox ? 'DOMMouseScroll' : 'wheel'

window.addEventListener(wheelEvt, mouseWheelEvt );


function mouseWheelEvt(e) {
	var index = e.wheelDelta ? e.wheelDelta : -e.detail;

	(index < 0)
		? fixedNav.classList.add('active') 
		: fixedNav.classList.remove('active')
}
















console.log()










