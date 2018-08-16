$(document).ready(function(){

	// console.log( $('.post').html() );
	// $('.post').before('<li>Не Эмфазируй это </li>');
	// $('.foo b').closest('li').hide();
	// .find('b')
	//.addClass('WHAT');


	// function calculateCartPrice() {
	// 	var price = 0;
	// 	$('#cart tr').each(function(){
	// 		var priceItem = $(this).find('.price').text() 
	// 		*(this).find('input').val();
	// 		price = price + priceItem;
	// 	});
	// 	$('#price').text(price);
	// }
	// 	calculateCartPrice();

	$('.video-wrap').slick();

	$('.custom-select').selectize();

	// $('.video-wrap_item').fancyboxPlus();

	function calculateCartPrice() {
		var price = 0;
		$('#cart tr').each(function(){
		var priceItem = $(this).find('.price').text() * $(this).find('input').val();
		price = price + priceItem;
		});
		$('#price').text(price);
		}

		calculateCartPrice();

		$('#cart input').on('change', function(){
			calculateCartPrice();
		});

});
