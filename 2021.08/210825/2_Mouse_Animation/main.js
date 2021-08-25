var pageContainer = document.querySelector('.page-container');
var pageBack = document.querySelector('.page-back');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;



pageContainer.addEventListener("mousemove", function(e) {
	// console.log('pageX', e.pageX);
	// console.log('pageY', e.pageY);

	var moveX = ((windowWidth / 2) - e.pageX) * 0.1;
	var moveY = ((windowHeight / 2) - e.pageY) * 0.1;

	// console.log('moveX', moveX);
	// console.log('moveY', moveY);

	// pageBack.style.marginLeft = moveX + "px";
	// 혹은 pageBack.style.marginLeft = `${moveX}px`;
	// pageBack.style.marginTop = moveY + "px";
	// 혹은 pageBack.style.marginTop = `${moveY}px`;

	pageBack.style.transform = `translate(${moveX}px, ${moveY}px)`;
})










