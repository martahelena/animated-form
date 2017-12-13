$(document).ready(function(){
	/* Form validation */
	var $name = $("input[name=name]");
	var $phone = $("input[name=phone]");
	var $formElem = $("input, select");
	var $canvas = $(".canvas__container");

	$("form").submit(function(e){
		if( !($name.val()) ) {
			e.preventDefault();
			$name.addClass("form__input--error");
			$("+ .errormessage", $name).css("visibility", "visible");
			$canvas.addClass("canvas__container--error");
		}
		if( $phone.val().length < 6 || !($.isNumeric($phone.val())) ) {
			e.preventDefault();
			$phone.addClass("form__input--error");
			$("+ .errormessage", $phone).css("visibility", "visible");
			$canvas.addClass("canvas__container--error");
		}
	});

	$formElem.focus(function(){
		if($(this).hasClass("form__input--error")) {
			$(this).removeClass("form__input--error");
			$('+ .errormessage', this).css("visibility", "hidden");
		}
		if($canvas.hasClass("canvas__container--error")) {
			$canvas.removeClass("canvas__container--error");
		}
		$(this).parent().find("label").eq(0).addClass("form__label--focused");
	});

	$formElem.blur(function(){
		$(this).parent().find("label").eq(0).removeClass("form__label--focused");
	});

	/*Mobile*/
	function changeMonthFormat() {
		$("select[name='month'] option").each(function(){
			var $monthAsNumber = $(this).attr("value");
			var $monthAsWord = $(this).attr("data-month");
			if ($(window).width() < 730 ) {
				$(this).text($monthAsNumber);
			} else {
				$(this).text($monthAsWord);
			}
			
		});
	}
	changeMonthFormat();

	$(window).resize(function() {
		changeMonthFormat();
	});
})