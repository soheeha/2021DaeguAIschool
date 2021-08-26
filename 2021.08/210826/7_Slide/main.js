var firstSlide = document.querySelector('.item:first-child');
firstSlide.classList.add('show')

function slide() {
	var currentSlide = document.querySelector('.show');

	if(currentSlide) {
		currentSlide.classList.remove('show');
		var nextSlide = currentSlide.nextElementSibling;

		if(nextSlide) {
			nextSlide.classList.add('show')
		} else {
			firstSlide.classList.add('show')  // 다시 처음으로
		}


	} else {
		firstSlide.classList.add('show')
	}

}

slide();
setInterval(slide, 1000);








