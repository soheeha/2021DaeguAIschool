var btns = document.querySelectorAll('.accordion')

btns.forEach(function(btn) {
	btn.addEventListener('click', function() {
		// console.log(this);
		this.classList.toggle('active');

		var panel = this.nextElementSibling;
		console.log(panel.scrollHeight)

		if(panel.style.maxHeight) {
			panel.style.maxHeight = null
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	})
})













