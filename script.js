$(document).ready(function(){
	$('.outputDiv').hide();
	function randomNumber(min, max){
		return Math.floor(Math.random() * (1 + max - min) + min);
	}

	function getPropertyId(){
		return randomNumber(1000, 9000);
	}
	function getSqFt(){
		return  randomNumber(2000, 9000);
	}
	function getPrice(){
		return randomNumber(5, 30);
	}

	var index = 12;

	$('.employeeContainer').on('click', '.generateButton', function(){
		
		for( var i=0; i< index;i++){
			$('.outputDiv').append('<div class="itemRow"></div>');
			//var $parent = $('.outputTable').children().last();
			var $el = $('.outputDiv').children().last();
			
			$el.append("<div class='itemCell'>Property ID:&nbsp;&nbsp; " + getPropertyId() + "</div>");
			$el.append("<div class='itemCell'>" + getSqFt() + " Sq. Ft.</div>");
			$el.append("<div class='itemCell'>$" + getPrice() + " / sq.ft.</div>");
			$el.append("<div class='itemCell'><button class='deleteButton'>Remove</button></div>");
			
			$('.outputDiv').slideDown();	
			var delayTime = i * 100;
			$el.hide()
				.delay(delayTime)
				.slideDown(500);
		 }
		
		
	});

	$('.outputDiv').on('click', '.deleteButton', function(){
		$(this).parent().parent().remove();
	});
});
