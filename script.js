$(document).ready(function(){

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

	$('.container').on('click', '.generate', function(){
		console.log("Click!");
		for( var i=0; i< index;i++){
			$('.outputTable').append('<tr class="property"></tr>');
			var $parent = $('.outputTable').children().last();
			var $el = $('.outputTable').children().closest("tr").last();
			
			$el.append("<td>Property ID: " + getPropertyId() + "</td>");
			$el.append("<td>" + getSqFt() + " Sq. Ft.</td>");
			$el.append("<td>$" + getPrice() + " / sq.ft.</td>");
			$el.append("<td><button class='deleteButton'>Remove</button></td>");
		
		var delayTime = i * 100;
		$parent.hide();
		$parent.fadeIn(2000);
		// 	.delay(delayTime)
		// 	.slideDown(500, function(){
		// 	});
		 }
		
	});


	$('.container').on('click', '.deleteButton', function(){
		$(this).parent().parent().remove();
	});
});
