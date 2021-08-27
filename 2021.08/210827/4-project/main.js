var $close_text = $(".close_text");
var $open_text = $(".open_text");
var $list_title_wrap = $('.list_title_wrap'); 
var $list_aricle_wrap = $('.list_aricle_wrap')

$close_text.click(function() {
	$close_text.hide();   // 클로즈 텍스트는 태그가 1개라서 this사용 안함
	$open_text.show();
	$list_aricle_wrap.addClass('hide');
})

$open_text.click(function() {
	$open_text.hide();   // 오픈 텍스트는 태그가 1개라서 this사용 안함
	$close_text.show();
	$list_aricle_wrap.removeClass('hide');
})

/*
$list_title_wrap.click(function() {
	if($(this).parent().find('.list_aricle_wrap').hasClass('hide')) {
		$(this).parent().find('.list_aricle_wrap').removeClass('hide');
	} else {
		$(this).parent().find('.list_aricle_wrap').addClass('hide');
	}
})
*/

$list_title_wrap.click(function() {
	$(this).next().toggleClass('hide');

	var hideLength = $('.list_aricle_wrap.hide').length

	if(hideLength === 4) {
		$close_text.hide();
		$open_text.show();
	}

	if(hideLength === 0) {
		$open_text.hide();
		$close_text.show();
	}
})