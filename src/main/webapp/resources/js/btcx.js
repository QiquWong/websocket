$(document).ready(function() {
	
	var step3 = function(){
	};
	
//	$("#trigger-step-2").click(function(e) {
//		e.preventDefault();
//		step3();
//	});
	
	// Step 2 Back 
	$("#trigger-step-2-back").click(function(e) {
		
		
		
		$('.buy-step-2').hide("slide", { direction: "left" }, 200);
		setTimeout(
			function(){
				$('.buy-step-1').show("slide", { direction: "right" }, 200);
			}
		, 200);
	});
	
	// Step 3 Submit
	$("#trigger-step-3").click(function(e) {
		
		e.preventDefault();
		
		$('.buy-step-3').hide("slide", { direction: "left" }, 200);
		setTimeout(
			function(){
				$('.buy-step-1').show("slide", { direction: "right" }, 200);
			}
		, 200);

	});
	/* end Buy Process */
	
	/* Test Message */
	$("#toggle-alerts").on("click", function(event){
		$(".btcx-alerts").css('visibility','visible').hide().fadeIn().removeClass('hidden');
	});	
	/* end Test Message */
	
	/* Clock */
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
	var dayNames= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
	
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();
	var date = new Date();
	date.setDate(date.getDate());
	
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	
	$('#date').html(dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + ' ' + date.getDate()); // date.getFullYear()
	
	setInterval( function() {
		
		var hours = new Date().getHours();
		var minutes = new Date().getMinutes();
		var seconds = new Date().getSeconds();
		var date = new Date();
		date.setDate(date.getDate());
		
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
		$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
		
		$('#date').html(dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + ' ' + date.getDate()); // date.getFullYear()
		
	}, 1000);
	/* end Clock */
	
	/* Tooltips */
	$('.btcx-footer-navigation li a').tooltip();
	/* end Tooltips */
		
});