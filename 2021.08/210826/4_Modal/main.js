var btnModal = document.querySelector('.btn-modal');
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal .btn-close');

btnModal.addEventListener('click', function() {
	modal.classList.add('active');
})

btnClose.addEventListener('click', function() {
	modal.classList.remove('active');
})

modal.addEventListener('click', function(e) {
	var target = e.target;
	var isLayer = target.classList.contains('modal-layer');

	if(isLayer) {
		modal.classList.remove('active');
	}
})

