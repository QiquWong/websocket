$(document).ready(function() {
	
	/* Test */
	$("#ajax-test").loadingbar({
		cache: false,
		replaceURL: false,
		done: function(data) {
			$(".btcx-alerts").hide();
			$("#frame").empty();
			$("#frame").prepend(data);
		},
	});
	
	$("#alert-test").on("click", function(event){
		$(".btcx-alerts").css('visibility','visible').hide().fadeIn().removeClass('hidden');
	});	
	/* end Test */
	
	/* Main Navigation Settings Toggle */
	$("#settings-nav-trigger").on("click", function(event){
		$("#dashboard-nav").addClass('hidden');
		$("#settings-nav").css('visibility','visible').hide().fadeIn().removeClass('hidden');
		
		$("#settings-nav-trigger").parent().addClass('hidden');
		$("#dashboard-nav-trigger").parent().css('visibility','visible').hide().fadeIn().removeClass('hidden');
	});
	$("#dashboard-nav-trigger").on("click", function(event){
		$("#settings-nav").addClass('hidden');
		$("#dashboard-nav").css('visibility','visible').hide().fadeIn().removeClass('hidden');
		
		$("#dashboard-nav-trigger").parent().addClass('hidden');
		$("#settings-nav-trigger").parent().css('visibility','visible').hide().fadeIn().removeClass('hidden');
	});	
	/* end Main Navigation Settings Toggle */

	/* Main Navigation */
	// Level 1
	$(".btcx-navbar-static-left .nav-stacked > li > a").on("click", function(event){
		
		// Check if item is active
		if ($(this).parent().hasClass('active')) {
			return false
		} else {						
			$(".btcx-navbar-static-left .nav-stacked > li").removeClass('active');
			// Also remove level 2 active links
			$(".btcx-navbar-static-left .nav-stacked ul > li").removeClass('active'); 
			// Add class to this element
			$(this).parent().addClass('active');
			// And also to first child
			$(".btcx-navbar-static-left .nav-stacked ul > li:first-child").addClass('active');
		}
		
	});
	// Level 2
	$(".btcx-navbar-static-left .nav-stacked ul > li > a").on("click", function(event){
		
		// Check if item is active
		if ($(this).parent().hasClass('active')) {
			return false
		} else {
			// Remove all active classes
			$(".btcx-navbar-static-left .nav-stacked ul > li").removeClass('active');
			// Add class to this element
			$(this).parent().addClass('active');
		}
		
	});
	/* end Main Navigation */	
	
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