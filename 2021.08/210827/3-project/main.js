var $profile = $('.profile');
var $profilePopup = $('.profile-popup');

/*
$profile.on({
	mouseenter: function() {
		$(this).parent().find('.profile-popup').css('display', 'block');
	},

	mouseleave: function() {
		$profilePopup.css('display', 'none');
	}
})
*/

var $profile = $('.profile');

$profile.on({
	mouseenter: function() {
		$(this).next().fadeIn()
	},
	mouseleave: function() {
		$(this).next().fadeOut()
	}
})
