$(function() {
	
	// 선택자

	// $('header').css('border', 'solid 10px red');
	// $('#masthead-id').css("color", "red");
	// $('.masthead-heading').css("color", "blue");

	// console.log($("#masthead-id"));

	// var $mastHead = $("#masthead-id");
	// console.log(mastHead);


	// $('.nav-item:even').css('background-color', 'blue');
	// $('.nav-item:odd').css('background-color', 'green');
	// $('.nav-item:eq(0)').css('background-color', 'pink');

	// $('header #masthead-id.masthead-subheading').css("color", "red");
	// console.log($("#test"));

	

	// 제이쿼리 활용시 주의점
	// html 파일에서 라이브러리를 먼저 연동하고 나의 js파일을 뒤에 적어야 한다.



	// 이벤트
	/*
	$("header #masthead-id").mouseenter(function() {
		// $("header #masthead-id").css('background-color', 'yellow');
		$(this).css('background-color', 'yellow');
	})

	$("header #masthead-id").mouseleave(function() {
		$(this).css('background-color', 'blue');
	})

	$("header #masthead-id").click(function() {
		$(this).css('background-color', 'pink');
	})
	*/


	/*
	$("header #masthead-id").on({
		mouseenter: function(){
			$(this).css('background-color', 'yellow');
		},
		mouseleave: function(){
			$(this).css('background-color', 'blue');
		},
		click: function() {
			$(this).css('background-color', 'pink');
		}
	})
	*/

	/*
	$("header #masthead-id").on({
		mouseenter: function(){
			$(this).fadeTo('fast', 1);
		},
		mouseleave: function(){
			$(this).fadeTo('fast', 0.5);
		}
	})
	*/

	/*
	$("#masthead-id").click(function() {
		$(".masthead-heading").hide();
	});

	$("#masthead-id").click(function() {
		$(".masthead-heading").show();
	});
	*/

	/*
	$("#masthead-id").click(function() {
		$(".masthead-heading").toggle();
	});
	*/

	/*
	$("#masthead-id").click(function() {
		$(".masthead-heading").slideDown();
	});
	*/

	/*
	$("#masthead-id").click(function() {
		$(".masthead-heading").slideToggle();  // slideUp, slideDown
	});
	*/

	/*
	$("header .btn-one").click(function() {
		$(".masthead-heading").fadeOut();
	})

	$("header .btn-two").click(function() {
		$(".masthead-heading").fadeIn();
	})
	*/


	/*
	$("header .btn-one").click(function() {
		$("#masthead-id").addClass('blue');
		$(".masthead-heading").addClass("important");
	});

	$("header .btn-two").click(function() {
		$("#masthead-id").removeClass('blue');
		$(".masthead-heading").removeClass("important");
	});
	*/



	var $id = $("#masthead-id");

	$(".btn-one").click(function() {
		// console.log($id.hasClass('blue'));
		// if($id.hasClass('blue')) {
		// 	$id.removeClass('blue');
		// } else {
		// 	$id.addClass('blue');
		// }

		$id.toggleClass("blue")
	})












})































